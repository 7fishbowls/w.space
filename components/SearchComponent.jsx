import Link from "next/link";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdError } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function SearchComponent({ styles }) {
  const CONSTANTS = [
    "black_hole",
    "white_dwarf",
    "neutron_star",
    "supernova",
    "hypernova",
    "event_horizon",
    "wormhole",
    "dark_matter",
    "dark_energy",
    "cosmic_ray",
    "gamma_ray",
    "x_ray",
    "ultraviolet_light",
    "infrared_light",
    "radio_wave",
    "gravitational_wave",
    "exoplanet",
    "red_giant",
    "brown_dwarf",
    "stellar_nursery",
    "accretion_disk",
    "quasar",
    "pulsar",
    "magnetar",
    "interstellar_medium",
    "nebula",
    "protostar",
    "circumstellar_disk",
    "heliosphere",
    "chromosphere",
    "photosphere",
    "corona",
    "solar_flare",
    "coronal_mass_ejection",
    "sunspot",
    "galactic_core",
    "spiral_galaxy",
    "elliptical_galaxy",
    "barred_spiral_galaxy",
    "irregular_galaxy",
    "dark_galaxy",
    "cosmic_web",
    "void_space",
    "big_bang",
    "cosmic_microwave_background",
    "gravitational_lens",
    "cosmological_constant",
    "hubble_constant",
    "redshift",
    "blueshift",
    "parsec",
    "light_year",
    "astronomical_unit",
    "kelvin_temperature",
    "orbital_resonance",
    "tidal_heating",
    "libration_point",
    "trojan_asteroid",
    "kuiper_belt",
    "oort_cloud",
    "comet_tail",
    "meteor_shower",
    "asteroid_belt",
    "dwarf_planet",
    "plasma_tail",
    "heliosheath",
    "termination_shock",
    "bow_shock",
    "intergalactic_medium",
    "galactic_halo",
    "stellar_wind",
    "proton_storm",
    "ionized_gas",
    "magnetosphere",
    "aurora_borealis",
    "aurora_australis",
    "cryovolcanism",
    "ring_system",
    "shepherd_moon",
    "roche_limit",
    "oblate_spheroid",
    "tidal_locking",
    "phase_curve",
    "eclipsing_binary",
    "transit_method",
    "radial_velocity",
    "gravitational_instability",
    "protoplanetary_disk",
    "stellar_metals",
    "isotropic_radiation",
    "anisotropic_radiation",
    "galactic_cannibalism",
    "stellar_merger",
    "hypervelocity_star",
    "rogue_planet",
    "tidally_disrupted_object",
    "space_time",
    "multiverse_theory",
    "brane_cosmology",
    "extraterrestrial_life",
  ];

  const [matchedElements, setElements] = useState([]);

  const [searchValue, setSetValue] = useState("");
  const [error_4o4, setError4o4] = useState(false);

  const handleClear = () => {
    if (searchValue) {
      setSetValue("");
      setElements([]);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase().replace(" ", "_");
    if (!e.target.value) {
      setSetValue(value);
      return setElements([]);
    }

    setSetValue(value);
    const newArray = CONSTANTS.filter((elem) => elem.includes(value));
    setElements(newArray);
    if (!newArray.length) {
      setElements([]);
      setError4o4(true);
    } else {
      setError4o4(false);
    }
  };

  return (
    <section className={styles.search_box}>
      <div className={styles.input_area}>
        <input
          type="text"
          placeholder="Search anything..."
          value={searchValue}
          onChange={handleChange}
          maxLength={15}
          onBlur={handleClear}
        />
        <button onClick={handleClear} disabled={!searchValue}>
          <RxCross2 />
        </button>
      </div>

      <div
        className={styles.matched_elements}
        style={{ borderBottom: searchValue ? "1px solid #3a3a3a" : "none" }}
      >
        {matchedElements.map((elem) => (
          <Link key={elem} href={`/explore/researches/${elem}`}>
            <IoSearch
              style={{ marginRight: "10px", transform: "translateY(1px)" }}
            />
            {elem}
          </Link>
        ))}
        {error_4o4 && searchValue && (
          <p className={styles.cant_find}>
            <MdError style={{ marginRight: "10px" }} /> Can't find :{" "}
            {searchValue}{" "}
          </p>
        )}
      </div>
    </section>
  );
}
