import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoryCard = (props) => {
    let category = props.category
    return (
        <Link to={`/category/${category.strCategory}`} style={{ textDecoration: 'none' }}>
            <Card variant="outlined" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia component="img" height="140" image={category.strCategoryThumb} alt="food category" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <b>{category.strCategory}</b>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {category.strCategoryDescription.substring(0, 100)}...
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

export default CategoryCard



