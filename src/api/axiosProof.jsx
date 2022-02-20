import React, { useState, useEffect } from 'react'
import axios from "axios";

export default function AxiosProof(){
    
    let axios = require("axios").default;
    let options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
        params: {tag: '3d.fantasy.pvp', platform: 'pc'},
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': 'a747c78b0emshbb6611ca068d29cp19a88ajsnd06816a76109'
        }
    };   
    
    let closting = []

    axios.request(options).then(function (response) {
        let closting = response.data
        console.log(closting);
        console.log('----------------------------------------')
    }).catch(function (error) {
        console.error(error);
    });   
    
    
    
    
    return (
        <div>
            <p>Apiiiiiiiii</p>
            <p>
                {closting[0]}
            </p>    
        </div>
    )



    }