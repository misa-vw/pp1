import Link from "next/link";
import {
  CardContent,
  Typography,
  Grid,
  Rating,
  Tooltip,
  Fab,
  Avatar,
} from "@mui/material";
import { Stack } from "@mui/system";
import { IconBasket } from "@tabler/icons-react";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";

const ecoCard = [
  {
    title: "Almond Tree",
    subheader: "September 14, 2023",
    photo: '/images/products/almond-tree.jpg',
    salesPrice: 375,
    price: 285,
    rating: 4,
  },
  {
    title: "Cedar Tree",
    subheader: "September 14, 2023",
    photo: '/images/products/cedar-tree.jpg',
    salesPrice: 650,
    price: 900,
    rating: 5,
  },
  {
    title: "Eucalyptus Tree",
    subheader: "September 14, 2023",
    photo: '/images/products/eucalyptus-tree.jpg',
    salesPrice: 150,
    price: 200,
    rating: 3,
  },
  {
    title: "Olive Tree",
    subheader: "September 14, 2023",
    photo: '/images/products/olive-tree.jpg',
    salesPrice: 285,
    price: 345,
    rating: 2,
  },
];

const Blog = () => {
  return (
    <Grid container spacing={3}>
      {ecoCard.map((product, index) => (
        <Grid item xs={12} md={4} lg={3} key={index}>
          <BlankCard>
            <Typography component={Link} href="/">
              <Avatar
                src={product.photo}
                variant="square"
                sx={{
                  height: 250,
                  width: "100%",
                }}
              />
            </Typography>
            <Tooltip title="Adopt Tree">
              <Fab
                size="small"
                color="primary"
                // Highlighted: Updated the `component` and `href` for navigation
                component={Link}
                href={`/adopt-tree/AdoptForm`} // Dynamic link based on tree title
                sx={{
                  bottom: "75px",
                  right: "15px",
                  position: "absolute",
                }}
              >
                <IconBasket size="16" />
              </Fab>
            </Tooltip>
            <CardContent sx={{ p: 3, pt: 2 }}>
              <Typography variant="h6">{product.title}</Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt={1}
              >
                <Stack direction="row" alignItems="center">
                  <Typography variant="h7">{product.price} Adopted</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Blog;
