import React, { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Divider from "@mui/material/Divider";

const Categories = ["Hair Style", "Health Care", "Beauty Care"];
const Institutions = {
  "Hair Style": [
    {
      name: "Salon 1",
      image: "assets/home/salons/salon1.jpg",
      rate: 5,
      location: "Sharjah , UAE Alwahda Street"
    },
    {
      name: "Salon 2",
      image: "assets/home/salons/salon1.jpg",
      rate: 4,
      location: "Dubai , UAE Alshesk Zayed Street"
    }
  ],
  "Health Care": [
    {
      name: "Salon 1",
      image: "assets/home/salons/salon1.jpg",
      rate: 1,
      location: "Sharjah , UAE Alwahda Street"
    },
    {
      name: "Salon 2",
      image: "assets/home/salons/salon1.jpg",
      rate: 2,
      location: "Dubai , UAE Alshesk Zayed Street"
    }
  ],
  "Beauty Care": [
    {
      name: "Salon 1",
      image: "assets/home/salons/salon1.jpg",
      rate: 3,
      location: "Sharjah , UAE Alwahda Street"
    },
    {
      name: "Salon 2",
      image: "assets/home/salons/salon1.jpg",
      rate: 3.5,
      location: "Dubai , UAE Alshesk Zayed Street"
    }
  ]
};
export default function InstitutionsComp() {
  const [category, setCategory] = useState(null);
  const [insts, setInsts] = useState([]);

  useEffect(() => {
    setInsts(Institutions[category]);
  }, [category]);

  return (
    <div className="insts-container">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Categories}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Catergory" />}
        value={category}
        onChange={(e, nv) => setCategory(nv)}
      />
      {insts && <Table insts={insts} />}
    </div>
  );
}

function Table({ insts }) {
  return (
    <div>
      {insts.map((inst) => {
        return <div>{inst.rate}</div>;
      })}
      <Divider light />
    </div>
  );
}

function Record() {
  return <div></div>;
}
