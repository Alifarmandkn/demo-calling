import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Chip,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Ingredient } from '../types/ingredient';
import { ingTypes } from '../constants/ingredientTypes';

interface IngredientsListProps {
  ingredients: Ingredient[];
  onEdit: (ingredient: Ingredient) => void;
  onDelete: (id: string) => void;
}

const IngredientsList: React.FC<IngredientsListProps> = ({
  ingredients,
  onEdit,
  onDelete,
}) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [ingredientToDelete, setIngredientToDelete] = React.useState<
    string | null
  >(null);

  const handleDeleteClick = (id: string) => {
    setIngredientToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (ingredientToDelete) {
      onDelete(ingredientToDelete);
      setDeleteDialogOpen(false);
      setIngredientToDelete(null);
    }
  };

  const getCategoryName = (categoryId: string) => {
    const category = ingTypes.find((type) => type.id === categoryId);
    return category ? category.name : categoryId;
  };

  const getCategoryColor = (categoryId: string) => {
    const category = ingTypes.find((type) => type.id === categoryId);
    return category ? category.color : '#ccc';
  };

  const formatAlcoholPercentage = (alcoholRange: number[]) => {
    if (alcoholRange.length === 0) return '0%';
    if (alcoholRange.length === 1) return `${alcoholRange[0]}%`;
    if (alcoholRange[0] === alcoholRange[1]) return `${alcoholRange[0]}%`;
    return `${alcoholRange[0]}% - ${alcoholRange[1]}%`;
  };

  if (ingredients.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h6" color="text.secondary">
          No ingredients yet. Add your first ingredient above!
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={2}>
        {ingredients.map((ingredient) => (
          <Grid item xs={12} sm={6} md={4} key={ingredient.id}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mb: 1,
                  }}
                >
                  <Typography variant="h6" component="div">
                    {ingredient.name}
                  </Typography>
                  <Box>
                    <IconButton
                      size="small"
                      onClick={() => onEdit(ingredient)}
                      color="primary"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteClick(ingredient.id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      backgroundColor: getCategoryColor(ingredient.category),
                      border:
                        getCategoryColor(ingredient.category) === '#ffffff'
                          ? '1px solid #ccc'
                          : 'none',
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {getCategoryName(ingredient.category)}
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  Alcohol:{' '}
                  {formatAlcoholPercentage(ingredient.alcohol_percentage)}
                </Typography>

                {ingredient.substituted_by.length > 0 && (
                  <Box sx={{ mb: 1 }}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                    >
                      Substitutes:
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 0.5,
                        mt: 0.5,
                      }}
                    >
                      {ingredient.substituted_by.map((substitute, index) => (
                        <Chip
                          key={index}
                          label={substitute}
                          variant="outlined"
                          size="small"
                        />
                      ))}
                    </Box>
                  </Box>
                )}

                <Typography variant="caption" color="text.secondary">
                  Added: {new Date(ingredient.created_at).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete Ingredient</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this ingredient? This action cannot
            be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={handleDeleteConfirm}
            color="error"
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default IngredientsList;
