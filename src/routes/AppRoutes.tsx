import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "../pages/SearchPage/SearchPage";
import CityPage from "../pages/CityPage/CityPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export default function AppRoutes() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={(props: any) => (
                            <>
                              <SearchPage/>
                            </>
                        )}
                    />
                    
                    <Route
                        exact
                        path="/city/:cityName"
                        component={(props: any) => (
                            <>
                                <CityPage/>
                            </>
                        )}
                    />

                    <Route>
                        <ErrorPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
