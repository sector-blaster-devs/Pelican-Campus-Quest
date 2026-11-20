# Credits, Attributions & Licenses

**Application:** Pelican Campus Quest (Mountain View 3D Open-World Bicycle Adventure)  
**Maintainer / Operator:** `[YOUR_ORGANIZATION_OR_MAINTAINER_NAME]`  
**License Notice:** Refer to each component category below for the applicable open-source, font, asset, or attribution terms. Real-world landmarks, vehicles, hardware, and brands depicted in this interactive experience remain the trademarks and intellectual property of their respective owners.

---

## 1. 3D Mesh Packs (All 16 GLB Packs & Contained Meshes)

All 16 binary `.glb` mesh packs are mirrored from Google Cloud Storage (`https://www.gstatic.com/aistudio/starter-apps/pelican-campus/<slug>.glb`) by `tools/download-assets.mjs` into `public/assets/glb/` and also bundled with Base64/GZip inline fallbacks in `assets/glb/*_glb.js` for `origin:null` / offline execution.

| # | Pack Slug & Inline Module | CDN / Asset Path | Contained Meshes & Scene Role |
|---|---|---|---|
| 1 | `pelican_hero_v3` (`assets/glb/pelican_hero_v3_glb.js`) | `pelican_hero_v3.glb` | Articulated skinned American White Pelican rider rig: `Pelican_Armature`, `Pelican_Body_Skinned`, `Pelican_Noogler_Hat`, `Pelican_Propeller` / `Pelican_Noogler_Propeller`, `Pelican_Casquette`, `Pelican_Eyelid_L/R`, `Pelican_Thigh_L/R`, `Pelican_Shin_L/R`, `Pelican_Foot_L/R`, `Pelican_Wing_Humerus_L/R`, `Pelican_Wing_Fore_L/R`, `Pelican_Wing_Primaries_L/R`. |
| 2 | `priority_gbike_v9` (`assets/glb/priority_gbike_v9_glb.js`) | `priority_gbike_v9.glb` | 13 articulated 2-manifold bicycle sub-meshes with shared 2K PBR texture set: `priority_frame_v9`, `priority_chainguard_v9`, `priority_rearaxlenuts_v9`, `priority_wheel_rear_v9`, `priority_wheel_front_v9`, `priority_steerassembly_v9`, `priority_bell_v9`, `priority_bell_lever_v9`, `priority_basket_v9`, `priority_crank_v9`, `priority_pedal_r_v9`, `priority_pedal_l_v9`, `priority_saddle_v9`. |
| 3 | `gbike_and_vehicles_v2` (`assets/glb/gbike_and_vehicles_v2_glb.js`) | `gbike_and_vehicles_v2.glb` | Classic GBike cockpit props (`GBike_Saddle_V2`, `GBike_Basket_V2`, `GBike_Bell_V2`, `GBike_Bell_Lever_V2`, `GBike_ChainGuard_V2`, `GBike_HeadBadge_V2`), indoor trainer assembly (`Gym_Trainer_Stand_V2`, `Gym_Trainer_Flywheel_V2`, `Trainer_Front_Riser_Block_V8`), and `Waymo_Cruiser_V2`. |
| 4 | `tpu_8i` (`assets/glb/tpu_8i_glb.js`) | `tpu_8i.glb` | Portrait `1:1.24` `TPU_8i` silicon package with brushed-silver stiffener, deep-teal substrate, and gold chiplets—used for all 16 open-world collectibles, basket instanced pods, Bay View wall plaques, and Shoreline supercluster rack blades. |
| 5 | `campus_collectibles_v2` (`assets/glb/campus_collectibles_v2_glb.js`) | `campus_collectibles_v2.glb` | `TPU_Wafer_V2` (`TPU_Wafer_Pod_Mesh`), `Pinwheel_Stand_V2` (`Pinwheel_Mast_V2`), `Pinwheel_Rotor_V2`, `Pink_Flamingo_V2`, `MK_Espresso_Cart_V2`, and `BayView_Wood_Ramp_V2`. |
| 6 | `android_statues_v2` (`assets/glb/android_statues_v2_glb.js`) | `android_statues_v2.glb` | `Bugdroid_V2` (animated `Bugdroid_Head_V2` & `Bugdroid_Arm_R_V2`) plus 6 Android Lawn dessert statues: `Statue_Donut_V2`, `Statue_Cupcake_V2`, `Statue_IceCreamSandwich_V2`, `Statue_Lollipop_V2`, `Statue_Gingerbread_V2`, and `Statue_KitKat_V2`. |
| 7 | `campus_landmarks_v2` (`assets/glb/campus_landmarks_v2_glb.js`) | `campus_landmarks_v2.glb` | Hero campus landmarks: `Shoreline_Tensile_Bowl_V2` (`Shoreline_Amphitheatre_V2`), `Shoreline_Monument_Sign_V2`, `Stevens_Creek_Bridge_Arch_V2`, `Gradient_Canopy_Roof_V2`, and `BayView_Dragonscale_Canopy_V2`. |
| 8 | `campus_environment_v3` (`assets/glb/campus_environment_v3_glb.js`) | `campus_environment_v3.glb` | Modular campus architecture and props: `Bldg_MassTimber_Pavilion_V3`, `Bldg_ModernGlass_Wing_V3`, `Street_Signal_Mast_V3`, `Street_Lamp_Modern_V3`, `Campus_Bench_V3`, `Campus_Planter_V3`, `Campus_BikeRack_V3`, `Campus_TriBin_V3`, `Tree_CoastLiveOak_V3`, `Tree_CoastRedwood_V3`. |
| 9 | `props_and_finale_v4` (`assets/glb/props_and_finale_v4_glb.js`) | `props_and_finale_v4.glb` | Finale & campus prop suite: `Gemini4_Carbon_Monument_V4`, `TPU_Supercluster_Rack_V4`, `Campus_Jump_Ramp_V4`, `Traffic_Mast_V4`, `Campus_Bench_V4`, and `Campus_Bike_Rack_V4`. |
| 10 | `trees_v4` (`assets/glb/trees_v4_glb.js`) | `trees_v4.glb` | High-foliage native California canopy trees: `Tree_CoastLiveOak_V4` (*Quercus agrifolia*) and `Tree_CoastRedwood_V4` (*Sequoia sempervirens*). |
| 11 | `waymo_gen6_v4` (`assets/glb/waymo_gen6_v4_glb.js`) | `waymo_gen6_v4.glb` | `Waymo_Gen6_V4` autonomous robotaxi vehicle mesh (6th-Generation Waymo Driver Ojai / Zeekr CM1e body, roof LiDAR & perimeter sensor pods, and 4 articulated rotating/steering wheels). |
| 12 | `gym_interior_v5` (`assets/glb/gym_interior_v5_glb.js`) | `gym_interior_v5.glb` | Gradient Canopy indoor fitness studio props (SHA-256 verified): `Gym_Hex_Dumbbell_59AA_Flat_V5`, `Gym_Kettlebell_Set_V5`, `Gym_Studio_Spin_Bike_V5`, `Gym_Dumbbell_Rack_V5`, `Gym_Power_Squat_Rack_V5`, and `Gym_Wall_Clock_V5`. |
| 13 | `stan_trex_v5` (`assets/glb/stan_trex_v5_glb.js`) | `stan_trex_v5.glb` | Bronze *Tyrannosaurus rex* courtyard sculpture assembly: `Stan_Plinth_V5`, `Stan_Body_V5`, `Stan_Neck_Head_V5`, `Stan_Lower_Jaw_V5`, plus `Courtyard_Cafe_Set_V5`. |
| 14 | `campus_horizon_arch_v5` (`assets/glb/campus_horizon_arch_v5_glb.js`) | `campus_horizon_arch_v5.glb` | Horizon & architectural envelope meshes: `Campus_Office_Pavilion_V5`, `Courtyard_Landscape_Berm_V5`, and `Santa_Cruz_Ridgeline_Arc_V5`. |
| 15 | `gradient_canopy_v6` (`assets/glb/gradient_canopy_v6_glb.js`) | `gradient_canopy_v6.glb` | Refined Gradient Canopy & Bay View structures: `Gradient_Canopy_Building_V6` (with articulated `Visitor_Mast_YawMount_1..3_V6` and `Visitor_Origami_Pinwheel_Rotor_1..3_V6`), `Bay_View_Canopy_Pavilion_V6`, and `Campus_Office_Pavilion_V6`. |
| 16 | `props_and_bridge_v6` (`assets/glb/props_and_bridge_v6_glb.js`) | `props_and_bridge_v6.glb` | Microkitchen & trail landscaping suite: `Campus_Snack_Cart_V6`, `Stevens_Creek_Bridge_V6`, `Campus_Umbrella_Cafe_Set_V6`, `Campus_Market_Umbrella_Solo_V6`, `Campus_Jump_Ramp_V6`, `Campus_Landing_Ramp_V8`, `Courtyard_Landscape_Berm_V6`, `Campus_Planter_Box_V6`, `Shrub_Coastal_Cluster_V6`, `Shrub_Manicured_Hedge_V6`, `Ornamental_Grass_Plume_V6`, `Sierra_Granite_Boulder_V6_A`, `Sierra_Granite_Boulder_V6_B`. |

### Procedural 3D Geometry Systems (Generated in Code)
- **Mountain View Campus Terrain & Roads** (`scenes/open_campus_world.js`, `scenes/v5_aaa_environment.js`): Continuous heightfield earth surface, asphalt roadways with dual wheel-track wear, beveled Sierra granite curbs, sandstone courtyard pavers, Stevens Creek tidal channel, Bay View retention pond, and breakable tempered glass pane assembly at Gradient Canopy Gym.
- **GPU-Instanced Grass Field** (`scenes/v5_aaa_environment.js`): 132,000+ 3-segment curved tapered blades with road/building exclusion masks, mowed-lawn striping, golden-hour subsurface scattering, and deterministic wind-wave shader animation.
- **Architectural Sculpted Fallbacks & Overlays** (`scenes/open_campus_world.js`, `scenes/campus_worlds.js`): Sculpted silver-white dragonscale catenary canopies, Gradient Canopy timber soffits & breakable gym atrium, Drivetrain X-Ray glowing overlays, and Gates Carbon Drive 98-link animated belt kinematics.

---

## 2. Application Source Code & Build Tooling

| Module / Path | Responsibility |
|---|---|
| `main.js` | Deterministic bootstrap, URL query flag router (`?state=`, `?cam=`, `?xray=`, `?map=`, `?quality=`, `?audio=`, `?hud=0`, `?bike=`), dual idle auto-pilot handoff (`25s` story orbit / `60s` free roam), keyboard/pointer bindings, and deterministic virtual-clock hooks. |
| `core.js` | Three.js `WebGLRenderer` orchestration, 4-stage asset preload & shader warm-up pipeline, `PMREMGenerator` analytical IBL, camera director (Director / Chase / Macro Drivetrain / Aerial), Waymo/Pinwheel/Stan/Bugdroid scene animation sync, and simulation state integration. |
| `contract.js` | Shared spatial coordinate & heading convention, 16 `TPU_SPAWNS`, road graph, building blocks, jump/landing ramps, Waymo routes, Microkitchen boost pads, Story chapter timings (`72s` total), state store, and `DEMO_ACTIONS` / `DEMO_EVENTS` event bus. |
| `ui.js` | Unoccluded frosted-glass HUD controller, portrait `1:1.24` `TPU 8i` SVG counter & segmented progress bar, `30Hz` North-up Campus Radar minimap (compact/expanded + click-to-jump), `30Hz` 2D Polar Torque & Pedal Linkage X-Ray canvas, cursor auto-hide, and Legal/Credits modal controller. |
| `legal_docs.js` | Structured legal & attribution registry powering the in-app Credits & Licenses, Terms of Use template, and Privacy Policy template dialog plus Markdown clipboard export. |
| `rig/kin.js` | Pure math physics & drivetrain kinematics engine (gear ratios `44T:16T`, crank-pedal cadence, bike spring roll/pitch suspension dynamics, terrain & bridge deck heightfields, trainer sprint kinematics, closed-form two-bone avian IK solver). |
| `rig/ik_solver.js` | Deterministic `mulberry32` seeded PRNG, tapered limb orientation utilities, and vector IK helpers. |
| `rig/pelican_rig.js`, `rig/pelican_motion_poses.js`, `rig/pelican_skin_weights.js` | Articulated Pelican rider skeleton, smooth avian skin-weight validation, celebration wing-fan & surprise poses, blinking eyelids, and Noogler propeller hat mount. |
| `rig/gbike_rig.js`, `rig/gbike_rig_classic.js` | Priority GBike V9 (`priority_v9`) & Classic GBike V2 (`classic_v6`) articulated rigs, 16-slot instanced front-basket TPU rack, rotary bell striker, drivetrain X-Ray edge lines, and fallback procedural frame builders. |
| `game/world_nav_and_story.js` | Zero-Three.js fixed-timestep (`60Hz`) physics, collision deflection, Waymo traffic yield logic, gym glass breakout, bunny-hop & ramp air kinematics, TPU collection, and `72s` Story Auto-Pilot choreography. |
| `scenes/open_campus_world.js`, `scenes/campus_worlds.js` | Unified North Bayshore / Mountain View open-world builder, GLB scene graph extraction, origin normalization, material calibration, glass fracture shards, and landmark vignette definitions. |
| `scenes/materials.js`, `scenes/v5_aaa_environment.js`, `scenes/v5_postfx_lighting.js`, `scenes/v5_stan_encounter.js` | Custom GLSL sky dome, water pond ripples, golden dust motes, instanced grass shaders, road/curb/paver PBR generators, golden-hour lighting & shadow frustum setup, and Stan T-Rex encounter choreography. |
| `audio/game_audio.js`, `audio/bike_sfx.js`, `audio/lyria_score_b64.js` | Web Audio API synthesis & spatial Foley engine (freehub coasting click, carbon-belt hum, bell chime, gravel/wood-plank tire roll, glass shatter, TPU pickup arpeggio, Stan roar) + Base64 MP3 soundtrack player. |
| `index.html`, `styles.css`, `inline_fonts.css`, `index.css` | HTML entry point, pre-loader UI, SVG HUD iconography, responsive frosted-slate glass stylesheets, and inlined WOFF2 font declarations. |
| `tools/download-assets.mjs`, `vite.config.ts`, `tsconfig.json`, `package.json` | GStatic GLB fetcher with SHA-256 verification & gzip fallback decoder, Vite importmap build plugin, and TypeScript/Node configuration. |

---

## 3. Textures, Posters, Audio & Typography

### Procedural & Pre-Baked Textures (`assets/nano_textures.js`)
12 seamless PBR surface textures (`NANO_TEXTURES`):
- `brickPavers` · `concretePath` · `lawnGrass` · `mulchSoil`
- `foliageOak` · `foliageRedwood` · `pelicanFeathers` · `curtainGlass`
- `dragonscaleTiles` · `scallopShell` · `bridgePlanks` · `cedarTimber`

### Pre-Baked Reference Posters (`assets/omni_posters.js`)
- `OMNI_REF_POSTERS`: 5 pre-baked 16:9 JPEG chapter reference posters (`clip1` through `clip5`) generated via Nano Banana / Omni Flash pipeline (`origin:null` Data URL safe).

### Music & Sound Design (`audio/`)
- **Score (`audio/lyria_score_b64.js`):** 112 BPM California indie-funk / Rhodes soundtrack generated with **Lyria 3.5**, Base64-encoded MP3 (encoded with LAME 3.101).
- **Procedural Foley (`audio/game_audio.js`, `audio/bike_sfx.js`):** Real-time Web Audio API oscillators, filtered noise buffers, and dynamics compression (`AudioBufferSourceNode`, `BiquadFilterNode`, `DynamicsCompressorNode`).

### Custom Inline SVG Graphics (`index.html`)
- **Portrait `TPU 8i` Silicon Package Badge** (`100:124` viewBox, brushed-silver stiffener, `#0F353C` teal substrate, `#E8BE63` gold dual dies & 8 chiplets).
- **Gradient Canopy Origami Pinwheel / Favicon** (4-color architectural rotor emblem).

### Fonts (`inline_fonts.css` — Self-Hosted Base64 WOFF2)
- **Inter** (Weights 400, 500, 600, 700) — © The Inter Project Authors — **SIL Open Font License 1.1**
- **Space Grotesk** (Weights 400, 500, 600, 700) — © Florian Karsten — **SIL Open Font License 1.1**
- **JetBrains Mono** (Weights 400, 500, 600, 700) — © JetBrains s.r.o. — **SIL Open Font License 1.1**

---

## 4. Third-Party Libraries, Tooling & Licenses

| Package / Vendor File | Version / Notes | License | Copyright / Holder |
|---|---|---|---|
| `three` (`vendor/three.module.js`, `vendor/three.core.js`) | `r186` | **MIT** | Copyright © 2010–2026 Three.js Authors |
| `OrbitControls.js`, `GLTFLoader.js`, `BufferGeometryUtils.js`, `SkeletonUtils.js` (`vendor/`) | Three.js `r186` JSM addons | **MIT** | Copyright © 2010–2026 Three.js Authors |
| `vite` | `^8.3.0` | **MIT** | Copyright © 2019–present VoidZero Inc. & Vite Contributors |
| `@google/genai` | `^2.4.0` (package dependency) | **Apache-2.0** | Copyright © Google LLC |
| `typescript` | `^7.0.2` (devDependency) | **Apache-2.0** | Copyright © Microsoft Corporation |
| `@types/node` | `^22.14.0` (devDependency) | **MIT** | DefinitelyTyped Contributors |

### Summary of Standard Open-Source Licenses Used

#### MIT License (Three.js, Three.js Addons, Vite, `@types/node`)
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#### Apache License, Version 2.0 (`@google/genai`, `typescript`)
> Licensed under the Apache License, Version 2.0 (the "License"); you may not use these files except in compliance with the License. You may obtain a copy of the License at `https://www.apache.org/licenses/LICENSE-2.0`. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

#### SIL Open Font License, Version 1.1 (`Inter`, `Space Grotesk`, `JetBrains Mono`)
> Licensed under the SIL Open Font License, Version 1.1 (`https://openfontlicense.org`). The fonts may be used, studied, modified, and redistributed freely (including bundled via CSS `@font-face`), provided they are not sold by themselves.

---

## 5. Architectural, Hardware, Biological & Technical References

### Mountain View / North Bayshore Landmarks
- **Gradient Canopy** (2000 N Shoreline Blvd, Mountain View, CA) — Dragonscale-shingled scalloped roof shell, mass-timber soffits, Visitor Experience plaza, Google Store façade, and kinetic 4-color origami pinwheel masts.
- **Bay View Campus** (1200 Joaquin Rd / North Bayshore) — Twin double-curved catenary dragonscale roofs, clerestory glazing, and Stevens Creek retention pond.
- **Googleplex Courtyard** (1600 Amphitheatre Pkwy, Buildings 40–42) — Café umbrellas, California Coast Live Oaks & Coast Redwoods, **Stan** bronze *Tyrannosaurus rex* skeleton replica, and courtyard pink plastic flamingo folklore.
- **Android Lawn Sculpture Park** — **Bugdroid** mascot & classic Android OS dessert sculptures (*Cupcake*, *Donut*, *Gingerbread*, *Ice Cream Sandwich*, *KitKat*, *Lollipop*).
- **Stevens Creek Trail & Timber/Corten Arch Bridge** — Multi-use creek crossing linking North Bayshore to Shoreline Park.
- **Shoreline Amphitheatre** (1 Amphitheatre Pkwy) — Iconic white twin-peak tensile fabric canopy silhouette & Western monument signage against the **Santa Cruz Mountains** ridgeline.

### Vehicles, Hardware & Campus Culture References
- **Priority Bicycles Google GBike** — Aluminum cruiser step-through geometry, **Gates Carbon Drive** clean belt drivetrain, front welded wire basket, rotary bell, and four-color campus livery.
- **Waymo 6th-Gen Ojai (Zeekr CM1e)** — Autonomous electric ride-hailing MPV with roof-mounted LiDAR dome and perimeter perception array, depicted obeying campus crosswalk yields and speed profiles.
- **Google TPU (Tensor Processing Unit) `TPU 8i` / Trillium / Ironwood** — Custom AI accelerator silicon packaging & liquid-cooled supercluster rack architecture inspiring the collectible chips and Shoreline finale.
- **Microkitchen (`MK`) Espresso Carts & Noogler Propeller Cap** — Campus commuter culture touches rendered as interactive speed boosts and wearable toggleable headgear.

### Biological, Mathematical & Engineering References
- **American White Pelican (*Pelecanus erythrorhynchos*)** — Local San Francisco Bay & Stevens Creek marshland native waterbird, modeled with closed-form two-bone avian hindlimb/wing inverse kinematics (`rig/kin.js`, `rig/ik_solver.js`).
- **Deterministic PRNG (`Mulberry32`)** — 32-bit seeded pseudo-random number generator (Tommy Ettinger) ensuring reproducible grass placement, foliage, and physics across sessions.
- **Rendering & Geometry Pipelines** — WebGL2 physically based shading (`MeshStandardMaterial` / `MeshPhysicalMaterial`), `PCFSoftShadowMap` (4096px shadow cascades), `PMREMGenerator` analytical image-based lighting, ACES/AgX tone mapping, `CatmullRomCurve3` camera/route splines, and **Blender 5.2** glTF/GLB export workflows.

### Trademark & Brand Attribution Notice
Google, Googleplex, Gradient Canopy, Bay View, Android, Bugdroid, Waymo, TPU, Gemini, Lyria, and Noogler are trademarks of Google LLC. Priority Bicycles and Gates Carbon Drive are trademarks of their respective owners. Shoreline Amphitheatre and KitKat are trademarks of their respective owners. All depicted locations, vehicles, logos, and product names are included purely as creative, educational, and artistic references and do not imply endorsement or affiliation unless explicitly stated by the application operator.
