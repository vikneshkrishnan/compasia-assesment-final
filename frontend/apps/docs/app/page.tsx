"use client";

import {useEffect, useState} from "react";
import {Brand, Category, Product, ProductColor} from "../../../packages/models/product.model";
import axios from "axios";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TablePagination,
    TextField,
} from "@mui/material";
import {useRouter} from "next/navigation";

type SearchParams = {
    page: number;
    pageSize: number;
    brandId?: string; // Assuming you'll use the ID of the brand
    categoryId?: string; // Assuming you'll use the ID of the category
    productName?: string;
    productColor?: string;
};

export default function Page(): JSX.Element {


    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([]);
    const [productName, setProductName] = useState('');
    const [brands, setBrands] = useState<Brand[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [colors, setColors] = useState<ProductColor[]>([]);
    const [selectedColor, setSelectedColor] = useState("");
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [totalRows, setTotalRows] = useState<number>(0);
    const [page, setPage] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const pageNumber = page + 1;
                const productsResponse = await axios.get('http://localhost:3000/products', {
                    params: {
                        page: pageNumber,
                        pageSize: rowsPerPage,
                    },
                });
                setProducts(productsResponse.data.data);
                const categoriesResponse = await axios.get('http://localhost:3000/category');
                setCategories(categoriesResponse.data);
                const brandsResponse = await axios.get('http://localhost:3000/brand');
                setBrands(brandsResponse.data);
                const colorsResponse = await axios.get('http://localhost:3000/product-color');
                setColors(colorsResponse.data);
                setTotalRows(productsResponse.data.total)
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [page, rowsPerPage]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        console.log(`Changing to page: ${newPage}`);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPageSize = parseInt(event.target.value, 10);
        console.log(`Changing rows per page to: ${newPageSize}`);
        setRowsPerPage(newPageSize);
        setPage(0);
    };


    const handleOrder = (product: Product) => () => {
        const {id, productName, productColor} = product;
        try {
            const res = axios.post('http://localhost:3000/orders', {
                productId: id,
                productName: productName,
                productColor: productColor.color,
                orderDate: new Date(),
            });
            router.push('/orders');
        } catch (e) {
            console.log(e);
        }
    }

    const handleSearch = async () => {
        let productNameFormatted = productName.replace(/\+/g, '%20').trim();
        productNameFormatted = productNameFormatted.endsWith('%20')
            ? productNameFormatted.substring(0, productNameFormatted.length - 3)
            : productNameFormatted;

        const params = {
            page: 1,
            pageSize: 10,
            brandId: selectedBrand,
            categoryId: selectedCategory,
            productName: productNameFormatted,
            productColor: selectedColor,
        };

        try {
            const response = await axios.get('http://localhost:3000/products/filterByElements', {
                params: params,

            });
            setProducts(response.data.data);

        } catch (e) {
            console.log(e);
        }
    };


    const handleCancel = async () => {
        // Reset all the fields
        setProductName('');
        setSelectedBrand('');
        setSelectedCategory('');
        setSelectedColor('');
        try {
            const response = await axios.get('http://localhost:3000/products', {
                params: {
                    page: 1,
                    pageSize: 10,
                },
            });
            setProducts(response.data.data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                        <TextField
                            label="Product Name"
                            placeholder="Enter Product Name"
                            onChange={(e) => setProductName(e.target.value)}
                            variant="outlined"
                            fullWidth
                        />
                        <FormControl fullWidth>
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                label="Select Category"
                            >
                                {categories.map((category) => (
                                    <MenuItem key={category.id} value={category.id}>
                                        {category.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel>Brand</InputLabel>
                            <Select
                                value={selectedBrand}
                                onChange={handleBrandChange}
                                label="Select Brand"
                            >
                                {brands.map((brand) => (
                                    <MenuItem key={brand.id} value={brand.id}>
                                        {brand.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Box>
                            <FormControl fullWidth>
                                <InputLabel sx={{mb: 1}}>Color</InputLabel>
                                <Select
                                    value={selectedColor}
                                    onChange={handleColorChange}
                                    label="Select Color"
                                >
                                    {colors.map((color) => (
                                        <MenuItem key={color.id} value={color.id}>
                                            <Chip sx={{backgroundColor: color.color, color: "white"}}
                                                  label={color.color}/>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>

                        <Button onClick={handleSearch} variant="contained">Search Order</Button>
                        <Button onClick={handleCancel} variant="contained">Cancel</Button>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <Grid container spacing={20}>
                        {products.map((product) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                                <Card sx={{width: 300, height: "auto"}}>
                                    <CardMedia>
                                        <img style={{width: 300, height: 200}} src={product.productImage}
                                             alt={product.productName}/>
                                    </CardMedia>
                                    <CardContent>
                                        <h2>{product.productName}</h2>
                                        <p style={{fontWeight: "bolder"}}> FROM RM {product.productPrice}</p>
                                        <p>
                                            <span style={{
                                                display: 'inline-block',
                                                width: '15px',
                                                height: '15px',
                                                backgroundColor: product.productColor.color,
                                                borderRadius: '50%',
                                                marginRight: '5px',
                                                verticalAlign: 'middle'
                                            }}></span>
                                            {product.productColor.color}
                                        </p></CardContent>
                                    <Button onClick={handleOrder(product)} variant="contained" color="success"
                                            fullWidth>
                                        Place Order
                                    </Button>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Box display="flex" justifyContent="center" mt={4}>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={totalRows}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

