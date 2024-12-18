import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, CardMedia, CircularProgress, Collapse, Grid, IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ResipeCardStyled } from "./ResipeCardStyled";
import { useSearch } from "../SearchContext";

const ResipeCard = () => {
  const { search } = useSearch();
  const [expanded, setExpanded] = useState({});
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);

  // search foods
  const fetchRecipes = async () => {
    if (!search) {
      setFoods([]);
      return;
    }

    setLoading(true);

    try {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
      const response = await axios.get(url);
      setFoods(response.data.meals || []); 
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setFoods([]);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [search]);

  // Instructions toggle func
  const toggleExpand = (idMeal) => setExpanded((prev) => ({...prev, [idMeal]: !prev[idMeal]}));

  return (
    <ResipeCardStyled>
      <Box className="food-cards">
          {loading ? (
            <Box className='loadingBox'><CircularProgress/></Box>
          ) : (
            <Grid container spacing={3}>
              {foods.length > 0 ? (
                foods.map((food) => (
                  <Grid item key={food.idMeal}  xs={12} sm={6} md={4}>
                    <Card className="cardBox">
                      <CardMedia component="img" height="194" image={food.strMealThumb} />
  
                      <CardContent sx={{maxHeight: 70, display: 'flex', alignItems: 'center'}}>
                        <Typography variant="subtitle1" sx={{ color: '#16423C', fontWeight: '600' }}>{food.strMeal}</Typography>

                        <IconButton onClick={() => toggleExpand(food.idMeal)} className={`expand-more ${expanded[food.idMeal] ? "expanded" : "collapsed"}`}>
                          <ExpandMoreIcon />
                        </IconButton>
                      </CardContent>
  
                      <Collapse in={expanded[food.idMeal]} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography sx={{ marginBottom: 2 }}>Instructions:</Typography>
                          <Typography sx={{ marginBottom: 2 }}>{food.strInstructions || "No instructions available"}</Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </Grid>
                ))
              ) : (<Typography variant="h6" sx={{textAlign: 'center'}}>Not Found Resipe</Typography>)}
            </Grid>
          )}
      </Box>
    </ResipeCardStyled>
  );
};

export default ResipeCard;
