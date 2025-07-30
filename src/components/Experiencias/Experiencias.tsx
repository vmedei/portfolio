"use client";

import TecnologiasMarquee from "../TecnologiasMarquee";
import Doama from "./Doama";
import Sigest from "./Sigest";
import FoodCampus from "./FoodCampus";
import PfAspofern from "./PfAspofern";


export default function Experiencias() {

    return (
        <div
        >
            <section
                id="experiencia"
                className="container mx-auto p-8 md:rounded-xl bg-base-300 flex flex-col justify-between gap-4 overflow-hidden"
            >
                <div className="flex justify-between items-center gap-10">
                    <h2 className="md:text-3xl text-xl font-bold">Experiências</h2>
                    <TecnologiasMarquee gradientColor="#ebebeb" />
                </div>

                <div className="divider" />

                <Doama />

                <Sigest />

                <FoodCampus />

                <PfAspofern />

            </section>
        </div>

    );
}