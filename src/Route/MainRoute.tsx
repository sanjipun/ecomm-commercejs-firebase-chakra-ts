import MainLayout from 'Layout/MainLayout';
import React from 'react';
import { Route, Switch } from 'react-router';
import Landing from 'Views/LandingPage/Landing';
import ProductPage from 'Views/Products/ProductPage';
import CategoryPage from 'Views/CategoryPage/CategoryPage';
import AuthRoute from './AuthRoute';
import MyCart from 'Views/MyCartPage/MyCart';
import CheckoutPage from 'Views/CheckoutPage/CheckoutPage';
import Profile from 'Views/Profile/Profile';
import FavouriteProducts from 'Views/FavouriteProductsPage/FavouriteProducts';

interface MainRouteProps { }

const MainRoute: React.FC<MainRouteProps> = () => {
    return (
        <MainLayout>
            <Switch>
                <Route path="/auth" component={AuthRoute} />
                <Route path="/product" component={ProductPage} />
                <Route path="/category" component={CategoryPage} />
                <Route path="/my-cart" component={MyCart} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route path="/profile" component={Profile} />
                <Route path="/favourites" component={FavouriteProducts} />
                <Route exact path="/" component={Landing} />
            </Switch>
        </MainLayout>
    );
};

export default MainRoute;