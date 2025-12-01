import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Chip,
  Stack,
  Paper,
  Autocomplete,
  Grid,
} from '@mui/material';
import { ingTypes } from '../constants/ingredientTypes';
import { CreateIngredientData, Ingredient } from '../types/ingredient';
import ingredientsApi, {
  Ingredient as ApiIngredient,
} from '../services/ingredientsApi';
import { getCategoryTypeId, getTypeIdCategory } from '../utils/categoryMapping';

interface IngredientsFormProps {
  onSubmit: (_data: CreateIngredientData) => void;
  initialData?: Ingredient;
  onCancel?: () => void;
}

const IngredientsForm: React.FC<IngredientsFormProps> = ({
  onSubmit,
  initialData,
  onCancel,
}) => {
  const [formData, setFormData] = useState<CreateIngredientData>(
    initialData
      ? {
          name: initialData.name,
          category: getCategoryTypeId(initialData.category), // Convert database category to UI type ID
          alcohol_percentage: initialData.alcohol_percentage,
          substituted_by: initialData.substituted_by,
        }
      : {
          name: '',
          category: '',
          alcohol_percentage: [0, 0],
          substituted_by: [],
        }
  );

  const [existingIngredients, setExistingIngredients] = useState<
    ApiIngredient[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch existing ingredients for substitutes
  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const ingredients = await ingredientsApi.getAllIngredients();
        // Filter out the current ingredient if editing
        const filteredIngredients = initialData
          ? ingredients.filter((ing) => ing.id !== initialData.id)
          : ingredients;
        setExistingIngredients(filteredIngredients);
      } catch (error) {
        console.error('Error fetching ingredients:', error);
        setError('Failed to load existing ingredients');
      }
    };

    fetchIngredients();
  }, [initialData]);

  const handleInputChange = (
    field: keyof CreateIngredientData,
    value: string | number[]
  ) => {
    setFormData((prev: CreateIngredientData) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAlcoholChange = (index: number, value: number) => {
    const newAlcohol = [...formData.alcohol_percentage];
    newAlcohol[index] = value;
    setFormData((prev: CreateIngredientData) => ({
      ...prev,
      alcohol_percentage: newAlcohol,
    }));
  };

  const handleSubstitutesChange = (newSubstitutes: string[]) => {
    setFormData((prev: CreateIngredientData) => ({
      ...prev,
      substituted_by: newSubstitutes,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (formData.name.trim() && formData.category) {
        // Convert UI type ID back to database category string
        const dataForSubmission = {
          ...formData,
          category: getTypeIdCategory(formData.category),
        };
        await onSubmit(dataForSubmission);
        // Reset form if no initial data
        if (!initialData) {
          setFormData({
            name: '',
            category: '',
            alcohol_percentage: [0, 0],
            substituted_by: [],
          });
        }
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        {initialData ? 'Edit Ingredient' : 'Add New Ingredient'}
      </Typography>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Ingredient Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
            placeholder="e.g., Vodka, Lime Juice, Simple Syrup"
          />

          <FormControl fullWidth required>
            <InputLabel>Ingredient Category</InputLabel>
            <Select
              value={formData.category}
              label="Ingredient Category"
              onChange={(e) => handleInputChange('category', e.target.value)}
            >
              {ingTypes.map((type) => (
                <MenuItem key={type.id} value={type.id}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      sx={{
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        backgroundColor: type.color,
                        border:
                          type.color === '#ffffff' ? '1px solid #ccc' : 'none',
                      }}
                    />
                    {type.name}
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Alcohol Percentage Range
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Min %"
                  type="number"
                  value={formData.alcohol_percentage[0]}
                  onChange={(e) =>
                    handleAlcoholChange(0, parseFloat(e.target.value) || 0)
                  }
                  inputProps={{ min: 0, max: 100, step: 0.1 }}
                  helperText="Minimum alcohol percentage"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Max %"
                  type="number"
                  value={formData.alcohol_percentage[1]}
                  onChange={(e) =>
                    handleAlcoholChange(1, parseFloat(e.target.value) || 0)
                  }
                  inputProps={{ min: 0, max: 100, step: 0.1 }}
                  helperText="Maximum alcohol percentage"
                />
              </Grid>
            </Grid>
            <Typography variant="caption" color="text.secondary">
              Use same value for both if exact percentage, or range for
              variations
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Substituted By
            </Typography>
            <Autocomplete
              multiple
              options={existingIngredients}
              getOptionLabel={(option) => option.name}
              value={existingIngredients.filter((ing) =>
                formData.substituted_by.includes(ing.id)
              )}
              onChange={(_, newValue) => {
                // Extract ingredient IDs from selected ingredients
                const selectedIds = newValue.map((ing) => ing.id);
                handleSubstitutesChange(selectedIds);
              }}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select substitute ingredients"
                  placeholder="Choose from existing ingredients"
                />
              )}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option.name}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderOption={(props, option) => (
                <Box component="li" {...props}>
                  {option.name}
                </Box>
              )}
            />
            <Typography variant="caption" color="text.secondary">
              Select from existing ingredients that can be used as substitutes (IDs will be stored)
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={!formData.name.trim() || !formData.category || loading}
            >
              {loading
                ? 'Saving...'
                : initialData
                  ? 'Update Ingredient'
                  : 'Add Ingredient'}
            </Button>
            {onCancel && (
              <Button
                variant="outlined"
                size="large"
                onClick={onCancel}
                disabled={loading}
              >
                Cancel
              </Button>
            )}
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
};

export default IngredientsForm;
