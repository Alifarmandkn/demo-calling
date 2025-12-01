import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Typography,
  Paper,
  Grid,
  IconButton,
  Chip,
  FormGroup,
  Checkbox,
  Divider,
  Alert,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import {
  glassTypes,
  methodTypes,
  measurementUnits,
  CreateRecipeData,
  RecipeIngredient,
} from '../types/recipe';
import { Ingredient } from '../types/ingredient';
import recipeApi from '../services/recipeApi';
import ingredientsApi from '../services/ingredientsApi';

interface RecipeUploadFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

const RecipeUploadForm: React.FC<RecipeUploadFormProps> = ({
  onSuccess,
  onCancel,
}) => {
  const [formData, setFormData] = useState<CreateRecipeData>({
    name: '',
    glass_type: 'cocktail-glass',
    ingredients: [],
    description: '',
    story: '',
    methods: {
      Shaking: false,
      Straining: false,
      Stirring: false,
      Muddling: false,
      Blending: false,
      Building: false,
      Layering: false,
      Flaming: false,
    },
    founder_name: '',
  });

  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredIngredients, setFilteredIngredients] = useState<Ingredient[]>(
    []
  );
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    fetchIngredients();
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = ingredients.filter(
        (ingredient) =>
          ingredient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ingredient.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredIngredients(filtered);
      setShowSearchResults(true);
    } else {
      setFilteredIngredients([]);
      setShowSearchResults(false);
    }
  }, [searchQuery, ingredients]);

  const fetchIngredients = async () => {
    try {
      const data = await ingredientsApi.getAllIngredients();
      setIngredients(data);
    } catch (error) {
      console.error('Error fetching ingredients:', error);
    }
  };

  const handleInputChange = (field: keyof CreateRecipeData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleMethodChange = (method: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      methods: {
        ...prev.methods,
        [method]: checked,
      },
    }));
  };

  const handleIngredientSelect = (ingredient: Ingredient) => {
    // Determine default unit based on ingredient category
    let defaultUnit = 'cl'; // Default to cl for liquids

    if (
      ingredient.category.includes('garnish') ||
      ingredient.category.includes('herb')
    ) {
      defaultUnit = 'piece';
    } else if (
      ingredient.category.includes('spice') ||
      ingredient.category.includes('sugar')
    ) {
      defaultUnit = 'tsp';
    } else if (
      ingredient.category.includes('syrup') ||
      ingredient.category.includes('honey')
    ) {
      defaultUnit = 'tbsp';
    }

    const newIngredient: RecipeIngredient = {
      ingredient_id: ingredient.id,
      amount: 0,
      unit: defaultUnit,
    };

    setFormData((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, newIngredient],
    }));

    setSearchQuery('');
    setShowSearchResults(false);
  };

  const handleIngredientAmountChange = (
    index: number,
    amount: number | string
  ) => {
    // Allow empty string or valid numbers >= 0
    if (amount === '') {
      setFormData((prev) => ({
        ...prev,
        ingredients: prev.ingredients.map((ing, i) =>
          i === index ? { ...ing, amount: 0 } : ing
        ),
      }));
      return;
    }

    const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    if (isNaN(numAmount) || numAmount < 0) return;

    setFormData((prev) => ({
      ...prev,
      ingredients: prev.ingredients.map((ing, i) =>
        i === index ? { ...ing, amount: numAmount } : ing
      ),
    }));
  };

  const handleIngredientUnitChange = (index: number, unit: string) => {
    setFormData((prev) => ({
      ...prev,
      ingredients: prev.ingredients.map((ing, i) =>
        i === index ? { ...ing, unit } : ing
      ),
    }));
  };

  const removeIngredient = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index),
    }));
  };

  const getIngredientName = (ingredientId: string) => {
    const ingredient = ingredients.find((ing) => ing.id === ingredientId);
    return ingredient ? ingredient.name : 'Unknown Ingredient';
  };

  const getIngredientCategory = (ingredientId: string) => {
    const ingredient = ingredients.find((ing) => ing.id === ingredientId);
    return ingredient ? ingredient.category : '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Validation
      if (!formData.name.trim()) {
        throw new Error('Recipe name is required');
      }
      if (formData.ingredients.length === 0) {
        throw new Error('At least one ingredient is required');
      }
      if (!formData.description.trim()) {
        throw new Error('Description is required');
      }
      if (!formData.founder_name.trim()) {
        throw new Error('Founder name is required');
      }

      // Validate that all ingredients have amounts > 0
      const invalidIngredients = formData.ingredients.filter(
        (ing) => ing.amount <= 0
      );
      if (invalidIngredients.length > 0) {
        throw new Error('All ingredients must have amounts greater than 0');
      }

      // Filter methods to only include those that are true
      const filteredMethods: Record<string, boolean> = {};
      Object.entries(formData.methods).forEach(([method, isTrue]) => {
        if (isTrue) {
          filteredMethods[method] = true;
        }
      });

      // Create the payload with filtered methods (glass_type is already the ID)
      const payload = {
        ...formData,
        methods: filteredMethods,
      } as CreateRecipeData;

      // Log the recipe data being submitted
      console.log('🍹 Submitting Recipe Data:');
      console.log('📋 Form Data:', formData);
      console.log('📊 Ingredients:', formData.ingredients);
      console.log('🔍 Methods (Original):', formData.methods);
      console.log('🔍 Methods (Filtered):', filteredMethods);
      console.log('🥃 Glass Type ID:', formData.glass_type);
      console.log('📝 Final JSON Payload:', JSON.stringify(payload, null, 2));

      await recipeApi.createRecipe(payload);
      setSuccess('Recipe created successfully!');
      setFormData({
        name: '',
        glass_type: 'cocktail-glass',
        ingredients: [],
        description: '',
        story: '',
        methods: {
          Shaking: false,
          Straining: false,
          Stirring: false,
          Muddling: false,
          Blending: false,
          Building: false,
          Layering: false,
          Flaming: false,
        },
        founder_name: '',
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
      console.error('❌ Recipe submission error:', error);
      setError(
        error.response?.data?.error ||
          error.message ||
          'Failed to create recipe'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom align="center">
        Upload Recipe
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Recipe Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Recipe Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </Grid>

          {/* Glass Type Selection */}
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Glass Type</FormLabel>
              <RadioGroup
                row
                value={formData.glass_type}
                onChange={(e) =>
                  handleInputChange('glass_type', e.target.value)
                }
              >
                {glassTypes.map((glass) => (
                  <FormControlLabel
                    key={glass.id}
                    value={glass.id}
                    control={<Radio />}
                    label={glass.name}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>

          {/* Ingredients Section */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Ingredients
            </Typography>

            {/* Ingredient Search */}
            <Box sx={{ position: 'relative', mb: 2 }}>
              <TextField
                fullWidth
                label="Search Ingredient"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type to search ingredients by name or category..."
                helperText="Select ingredients from the dropdown below"
              />

              {showSearchResults && filteredIngredients.length > 0 && (
                <Paper
                  elevation={3}
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    maxHeight: 200,
                    overflow: 'auto',
                  }}
                >
                  {filteredIngredients.map((ingredient) => (
                    <Box
                      key={ingredient.id}
                      sx={{
                        p: 1,
                        cursor: 'pointer',
                        '&:hover': { bgcolor: 'action.hover' },
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                        '&:last-child': { borderBottom: 'none' },
                      }}
                      onClick={() => handleIngredientSelect(ingredient)}
                    >
                      <Typography variant="body2" fontWeight="medium">
                        {ingredient.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ textTransform: 'capitalize' }}
                      >
                        {ingredient.category.replace(/-/g, ' ')}
                      </Typography>
                    </Box>
                  ))}
                </Paper>
              )}
            </Box>

            {/* Selected Ingredients */}
            {formData.ingredients.length > 0 && (
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mb: 1, display: 'block' }}
              >
                Set amounts and units for each ingredient (all amounts must be
                greater than 0)
              </Typography>
            )}
            {formData.ingredients.map((ingredient, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: 2,
                  border: '1px solid',
                  borderColor:
                    ingredient.amount <= 0 ? 'error.main' : 'divider',
                  borderRadius: 1,
                  mb: 2,
                  bgcolor:
                    ingredient.amount <= 0 ? 'error.light' : 'transparent',
                }}
              >
                <Box sx={{ minWidth: 200 }}>
                  <Typography variant="body2" fontWeight="medium">
                    {getIngredientName(ingredient.ingredient_id)}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {getIngredientCategory(ingredient.ingredient_id).replace(
                      /-/g,
                      ' '
                    )}{' '}
                    • {ingredient.unit}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton
                    size="small"
                    onClick={() =>
                      handleIngredientAmountChange(index, ingredient.amount - 1)
                    }
                    disabled={ingredient.amount <= 0}
                  >
                    <RemoveIcon />
                  </IconButton>

                  <TextField
                    size="small"
                    type="number"
                    value={ingredient.amount === 0 ? '' : ingredient.amount}
                    onChange={(e) =>
                      handleIngredientAmountChange(index, e.target.value)
                    }
                    inputProps={{ min: 0, step: 0.1 }}
                    sx={{ width: 100 }}
                    label="Amount"
                    placeholder="0"
                  />

                  <Select
                    size="small"
                    value={ingredient.unit}
                    onChange={(e) =>
                      handleIngredientUnitChange(
                        index,
                        e.target.value as string
                      )
                    }
                    sx={{ width: 100 }}
                  >
                    {measurementUnits.map((unit) => (
                      <MenuItem key={unit.value} value={unit.value}>
                        {unit.label}
                      </MenuItem>
                    ))}
                  </Select>

                  <IconButton
                    size="small"
                    onClick={() =>
                      handleIngredientAmountChange(index, ingredient.amount + 1)
                    }
                  >
                    <AddIcon />
                  </IconButton>
                </Box>

                <IconButton
                  color="error"
                  onClick={() => removeIngredient(index)}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>

          {/* Description */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description (How to make)"
              multiline
              rows={4}
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              required
            />
          </Grid>

          {/* Story */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Story (Background)"
              multiline
              rows={3}
              value={formData.story}
              onChange={(e) => handleInputChange('story', e.target.value)}
            />
          </Grid>

          {/* Methods */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Methods Used
            </Typography>
            <FormGroup row>
              {methodTypes.map((method) => (
                <FormControlLabel
                  key={method}
                  control={
                    <Checkbox
                      checked={
                        formData.methods[
                          method as keyof typeof formData.methods
                        ]
                      }
                      onChange={(e) =>
                        handleMethodChange(method, e.target.checked)
                      }
                    />
                  }
                  label={method}
                />
              ))}
            </FormGroup>
          </Grid>

          {/* Founder Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Recipe Founder Name"
              value={formData.founder_name}
              onChange={(e) =>
                handleInputChange('founder_name', e.target.value)
              }
              required
            />
          </Grid>

          {/* Action Buttons */}
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button variant="outlined" onClick={onCancel} disabled={loading}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" disabled={loading}>
                {loading ? 'Creating...' : 'Submit Recipe'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default RecipeUploadForm;
