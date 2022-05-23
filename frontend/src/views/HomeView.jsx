import React from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Benefits } from 'components/Benefits';
import { Clients } from 'components/Clients';
import { Questions } from 'components/Questions';
import { AboutUs } from 'components/AboutUs';
import { Poster } from 'components/Poster';

function HomeView() {
    return (
        <>
            <Header />
            <Benefits />
            <Clients />
            <AboutUs />
            <Poster />
            <Questions />
            <Footer />
        </>
    );
}

export { HomeView };
