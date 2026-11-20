/**
 * legal_docs.js — Complete Structured Credits, Licenses, Terms of Use Template &
 * Privacy Policy Template for Pelican Campus Quest.
 *
 * Covers every 3D mesh pack (all 16 GLBs + procedural systems), application code modules,
 * textures, posters, audio, fonts, third-party libraries & license texts, and real-world
 * architectural, hardware, biological, and technical references.
 */

export const CREDIT_CATEGORIES = Object.freeze([
  Object.freeze({ id: "all", label: "All" }),
  Object.freeze({ id: "mesh-packs", label: "Mesh Packs (16)" }),
  Object.freeze({ id: "code", label: "Code & Rigs" }),
  Object.freeze({ id: "media", label: "Textures, Audio & Fonts" }),
  Object.freeze({ id: "libraries", label: "Libraries & Licenses" }),
  Object.freeze({ id: "references", label: "References & Marks" }),
]);

export const MESH_PACK_CREDITS = Object.freeze([
  Object.freeze({
    id: "pelican_hero_v3",
    title: "Pelican Hero Rider Pack",
    slug: "pelican_hero_v3.glb",
    modulePath: "assets/glb/pelican_hero_v3_glb.js",
    cdnUrl: "https://www.gstatic.com/aistudio/starter-apps/pelican-campus/pelican_hero_v3.glb",
    license: "App Asset Bundle",
    nodes: [
      "Pelican_Armature",
      "Pelican_Body_Skinned",
      "Pelican_Noogler_Hat",
      "Pelican_Propeller / Pelican_Noogler_Propeller",
      "Pelican_Casquette",
      "Pelican_Eyelid_L / _R",
      "Pelican_Thigh_L / _R",
      "Pelican_Shin_L / _R",
      "Pelican_Foot_L / _R",
      "Pelican_Wing_Humerus_L / _R",
      "Pelican_Wing_Fore_L / _R",
      "Pelican_Wing_Primaries_L / _R",
    ],
    notes: "Articulated skinned American White Pelican rider rig with eyelid blinks, wing-fan celebration poses, and removable Noogler propeller cap.",
  }),
  Object.freeze({
    id: "priority_gbike_v9",
    title: "Priority GBike Hero Bicycle Pack",
    slug: "priority_gbike_v9.glb",
    modulePath: "assets/glb/priority_gbike_v9_glb.js",
    cdnUrl: "https://www.gstatic.com/aistudio/starter-apps/pelican-campus/priority_gbike_v9.glb",
    license: "App Asset Bundle",
    nodes: [
      "priority_frame_v9",
      "priority_chainguard_v9",
      "priority_rearaxlenuts_v9",
      "priority_wheel_rear_v9",
      "priority_wheel_front_v9",
      "priority_steerassembly_v9",
      "priority_bell_v9",
      "priority_bell_lever_v9",
      "priority_basket_v9",
      "priority_crank_v9",
      "priority_pedal_r_v9",
      "priority_pedal_l_v9",
      "priority_saddle_v9",
    ],
    notes: "13 articulated 2-manifold bicycle sub-meshes sharing a 2K PBR texture set, bound to drivetrain, steering, bell striker, and X-Ray pivots.",
  }),
  Object.freeze({
    id: "gbike_and_vehicles_v2",
    title: "GBike Classic Props, Trainer & Cruiser Pack",
    slug: "gbike_and_vehicles_v2.glb",
    modulePath: "assets/glb/gbike_and_vehicles_v2_glb.js",
    cdnUrl: "https://www.gstatic.com/aistudio/starter-apps/pelican-campus/gbike_and_vehicles_v2.glb",
    license: "App Asset Bundle",
    nodes: [
      "GBike_Saddle_V2",
      "GBike_Basket_V2",
      "GBike_Bell_V2",
      "GBike_Bell_Lever_V2",
      "GBike_ChainGuard_V2",
      "GBike_HeadBadge_V2",
      "Gym_Trainer_Stand_V2",
      "Gym_Trainer_Flywheel_V2",
      "Trainer_Front_Riser_Block_V8",
      "Waymo_Cruiser_V2",
    ],
    notes: "Classic GBike cockpit attachments, Gradient Canopy Gym indoor sprint trainer stand + spinning flywheel, and secondary autonomous cruiser.",
  }),
  Object.freeze({
    id: "tpu_8i",
    title: "TPU 8i Silicon Package Pack",
    slug: "tpu_8i.glb",
    modulePath: "assets/glb/tpu_8i_glb.js",
    cdnUrl: "https://www.gstatic.com/aistudio/starter-apps/pelican-campus/tpu_8i.glb",
    license: "App Asset Bundle",
    nodes: ["TPU_8i (1 : 1.24 Portrait Silicon Package)"],
    notes: "Brushed-silver stiffener, deep-teal substrate, and champagne-gold dies powering all 16 collectibles, basket pods, Bay View wall plaques, and Shoreline rack blades.",
  }),
  Object.freeze({
    id: "campus_collectibles_v2",
    title: "Campus Collectibles & Street Props Pack",
    slug: "campus_collectibles_v2.glb",
    modulePath: "assets/glb/campus_collectibles_v2_glb.js",
    cdnUrl: "https://www.gstatic.com/aistudio/starter-apps/pelican-campus/campus_collectibles_v2.glb",
    license: "App Asset Bundle",
    nodes: [
      "TPU_Wafer_V2 (TPU_Wafer_Pod_Mesh)",
      "Pinwheel_Stand_V2 (Pinwheel_Mast_V2)",
      "Pinwheel_Rotor_V2",
      "Pink_Flamingo_V2",
      "MK_Espresso_Cart_V2",
      "BayView_Wood_Ramp_V2",
    ],
    notes: "16 kinetic wind pinwheels, courtyard flamingos, Microkitchen espresso carts, wafer pods, and timber kicker ramp.",
  }),
  Object.freeze({
    id: "android_statues_v2",
    title: "Android Lawn Sculpture Park Pack",
    slug: "android_statues_v2.glb",
    modulePath: "assets/glb/android_statues_v2_glb.js",
    cdnUrl: "https://www.gstatic.com/aistudio/starter-apps/pelican-campus/android_statues_v2.glb",
    license: "App Asset Bundle",
    nodes: [
      "Bugdroid_V2 (Bugdroid_Head_V2, Bugdroid_Arm_R_V2)",
      "Statue_Donut_V2",
      "Statue_Cupcake_V2",
      "Statue_IceCreamSandwich_V2",
      "Statue_Lollipop_V2",
      "Statue_Gingerbread_V2",
      "Statue_KitKat_V2",
    ],
    notes: "Animated waving Bugdroid mascot alongside six classic Android release dessert lawn statues.",
  }),
  Object.freeze({
    id: "campus_landmarks_v2",
    title: "Hero Campus Landmarks Pack",
    slug: "campus_landmarks_v2.glb",
    modulePath: "assets/glb/campus_landmarks_v2_glb.js",
    cdnUrl: "https://www.gstatic.com/aistudio/starter-apps/pelican-campus/campus_landmarks_v2.glb",
    license: "App Asset Bundle",
    nodes: [
      "Shoreline_Tensile_Bowl_V2 (Shoreline_Amphitheatre_V2)",
      "Shoreline_Monument_Sign_V2",
      "Stevens_Creek_Bridge_Arch_V2",
      "Gradient_Canopy_Roof_V2",
      "BayView_Dragonscale_Canopy_V2",
    ],
    notes: "Twin tensile peaks at Shoreline Amphitheatre, dimensional Shoreline sign, arch bridge silhouette, and landmark references.",
  }),
  Object.freeze({
    id: "campus_environment_v3",
    title: "Campus Environment & Architecture Pack",
    slug: "campus_environment_v3.glb",
    modulePath: "assets/glb/campus_environment_v3_glb.js",
    cdnUrl: "https://www.gstatic.com/aistudio/starter-apps/pelican-campus/campus_environment_v3.glb",
    license: "App Asset Bundle",
    nodes: [
      "Bldg_MassTimber_Pavilion_V3",
      "Bldg_ModernGlass_Wing_V3",
      "Street_Signal_Mast_V3",
      "Street_Lamp_Modern_V3",
      "Campus_Bench_V3",
      "Campus_Planter_V3",
      "Campus_BikeRack_V3",
      "Campus_TriBin_V3",
      "Tree_CoastLiveOak_V3",
      "Tree_CoastRedwood_V3",
    ],
    notes: "North Bayshore office pavilions, signalized intersections, waste tri-bins, planters, benches, and base California tree variants.",
  }),
  Object.freeze({
    id: "props_and_finale_v4",
    title: "Supercluster Finale & Plaza Props Pack",
    slug: "props_and_finale_v4.glb",
    modulePath: "assets/glb/props_and_finale_v4_glb.js",
    cdnUrl: "https://www.gstatic.com/aistudio/starter-apps/pelican-campus/props_and_finale_v4.glb",
    license: "App Asset Bundle",
    nodes: [
      "Gemini4_Carbon_Monument_V4",
      "TPU_Supercluster_Rack_V4",
      "Campus_Jump_Ramp_V4",
      "Traffic_Mast_V4",
      "Campus_Bench_V4",
      "Campus_Bike_Rack_V4",
    ],
    notes: "Shoreline Promenade liquid-cooled TPU Supercluster racks, carbon monument, jump ramp, and street furniture.",
  }),
  Object.freeze({
    id: "trees_v4",
    title: "High-Foliage California Canopy Trees Pack",
    slug: "trees_v4.glb",
    modulePath: "assets/glb/trees_v4_glb.js",
    cdnUrl: "https://www.gstatic.com/aistudio/starter-apps/pelican-campus/trees_v4.glb",
    license: "App Asset Bundle",
    nodes: ["Tree_CoastLiveOak_V4", "Tree_CoastRedwood_V4"],
    notes: "Detailed native Coast Live Oak (Quercus agrifolia) and Coast Redwood (Sequoia sempervirens) instanced across campus corridors.",
  }),
  Object.freeze({
    id: "waymo_gen6_v4",
    title: "Waymo 6th-Gen Ojai Autonomous Vehicle Pack",
    slug: "waymo_gen6_v4.glb",
    modulePath: "assets/glb/waymo_gen6_v4_glb.js",
    cdnUrl: "https://www.gstatic.com/aistudio/starter-apps/pelican-campus/waymo_gen6_v4.glb",
    license: "App Asset Bundle",
    nodes: ["Waymo_Gen6_V4 (Body, Roof LiDAR Dome, Perimeter Sensors, 4 Articulated Wheels)"],
    notes: "6th-generation autonomous MPV operating along Charleston Rd and Shoreline Blvd with synchronized wheel spin, steer, and blinkers.",
  }),
  Object.freeze({
    id: "gym_interior_v5",
    title: "Gradient Canopy Gym Interior Pack",
    slug: "gym_interior_v5.glb",
    modulePath: "assets/glb/gym_interior_v5_glb.js",
    cdnUrl: "https://www.gstatic.com/aistudio/starter-apps/pelican-campus/gym_interior_v5.glb",
    license: "App Asset Bundle",
    nodes: [
      "Gym_Hex_Dumbbell_59AA_Flat_V5",
      "Gym_Kettlebell_Set_V5",
      "Gym_Studio_Spin_Bike_V5",
      "Gym_Dumbbell_Rack_V5",
      "Gym_Power_Squat_Rack_V5",
      "Gym_Wall_Clock_V5",
    ],
    notes: "SHA-256 verified interior studio equipment arranged inside the glass atrium before the breakout smash.",
  }),
  Object.freeze({
    id: "stan_trex_v5",
    title: "Bronze 'Stan' T-Rex Courtyard Pack",
    slug: "stan_trex_v5.glb",
    modulePath: "assets/glb/stan_trex_v5_glb.js",
    cdnUrl: "https://www.gstatic.com/aistudio/starter-apps/pelican-campus/stan_trex_v5.glb",
    license: "App Asset Bundle",
    nodes: [
      "Stan_Plinth_V5",
      "Stan_Body_V5",
      "Stan_Neck_Head_V5",
      "Stan_Lower_Jaw_V5",
      "Courtyard_Cafe_Set_V5",
    ],
    notes: "Articulated bronze Tyrannosaurus rex monument with hinged neck and lower jaw plus Googleplex courtyard café seating.",
  }),
  Object.freeze({
    id: "campus_horizon_arch_v5",
    title: "Campus Horizon & Ridges Pack",
    slug: "campus_horizon_arch_v5.glb",
    modulePath: "assets/glb/campus_horizon_arch_v5_glb.js",
    cdnUrl: "https://www.gstatic.com/aistudio/starter-apps/pelican-campus/campus_horizon_arch_v5.glb",
    license: "App Asset Bundle",
    nodes: [
      "Campus_Office_Pavilion_V5",
      "Courtyard_Landscape_Berm_V5",
      "Santa_Cruz_Ridgeline_Arc_V5",
    ],
    notes: "360-degree Santa Cruz Mountains horizon ring, landscaped berms, and background campus massing.",
  }),
  Object.freeze({
    id: "gradient_canopy_v6",
    title: "Gradient Canopy & Bay View Structures Pack",
    slug: "gradient_canopy_v6.glb",
    modulePath: "assets/glb/gradient_canopy_v6_glb.js",
    cdnUrl: "https://www.gstatic.com/aistudio/starter-apps/pelican-campus/gradient_canopy_v6.glb",
    license: "App Asset Bundle",
    nodes: [
      "Gradient_Canopy_Building_V6",
      "Visitor_Mast_YawMount_1..3_V6",
      "Visitor_Origami_Pinwheel_Rotor_1..3_V6",
      "Bay_View_Canopy_Pavilion_V6",
      "Campus_Office_Pavilion_V6",
    ],
    notes: "Flagship Gradient Canopy shell with yawing origami wind-pinwheel masts and Bay View plaza pavilion.",
  }),
  Object.freeze({
    id: "props_and_bridge_v6",
    title: "Bridge, Microkitchen & Landscape Props Pack",
    slug: "props_and_bridge_v6.glb",
    modulePath: "assets/glb/props_and_bridge_v6_glb.js",
    cdnUrl: "https://www.gstatic.com/aistudio/starter-apps/pelican-campus/props_and_bridge_v6.glb",
    license: "App Asset Bundle",
    nodes: [
      "Campus_Snack_Cart_V6",
      "Stevens_Creek_Bridge_V6",
      "Campus_Umbrella_Cafe_Set_V6",
      "Campus_Market_Umbrella_Solo_V6",
      "Campus_Jump_Ramp_V6",
      "Campus_Landing_Ramp_V8",
      "Courtyard_Landscape_Berm_V6",
      "Campus_Planter_Box_V6",
      "Shrub_Coastal_Cluster_V6",
      "Shrub_Manicured_Hedge_V6",
      "Ornamental_Grass_Plume_V6",
      "Sierra_Granite_Boulder_V6_A / _B",
    ],
    notes: "Stevens Creek crossing, cafe umbrella clusters, jump/landing ramps, coastal shrubs, ornamental grass plumes, and Sierra granite boulders.",
  }),
  Object.freeze({
    id: "procedural_3d_systems",
    title: "Procedural 3D Terrain, Grass & Architectural Fallbacks",
    slug: "Generated at Runtime (WebGL2)",
    modulePath: "scenes/open_campus_world.js, scenes/v5_aaa_environment.js, scenes/campus_worlds.js",
    cdnUrl: "",
    license: "Application Source",
    nodes: [
      "132,000+ GPU-Instanced 3-Segment Tapered Grass Blades",
      "Heightfield Campus Terrain, Asphalt Roads & Beveled Sierra Granite Curbs",
      "Silver-White Dragonscale Catenary Roofs (Gradient Canopy & Bay View)",
      "Breakable Tempered Atrium Glass & Dynamic Shards",
      "98-Link Gates Carbon Drive Belt & X-Ray Hologram Wireframes",
    ],
    notes: "Custom runtime BufferGeometry builders, road/plaza masks, custom GLSL sky dome, water ripples, and dust motes.",
  }),
]);

export const CODE_MODULE_CREDITS = Object.freeze([
  Object.freeze({
    id: "core-bootstrap",
    title: "Bootstrap, Contract & Application Core",
    files: ["main.js", "core.js", "contract.js", "legal_docs.js"],
    summary: "Deterministic initialization, URL query flag router, 4-stage shader/GLB pre-warmer, shared state/event bus, dual idle auto-pilot handoff, and virtual clock harness.",
  }),
  Object.freeze({
    id: "physics-nav",
    title: "Open-World Physics, Kinematics & Story Auto-Pilot",
    files: ["game/world_nav_and_story.js", "rig/kin.js", "rig/ik_solver.js"],
    summary: "Zero-Three.js 60Hz fixed-timestep bicycle physics, 44T:16T drivetrain kinematics, spring roll/pitch dynamics, closed-form two-bone avian IK, Mulberry32 PRNG, Waymo yield logic, and 72s 5-chapter autopilot.",
  }),
  Object.freeze({
    id: "character-vehicle-rigs",
    title: "Articulated Rider & Bicycle Rigs",
    files: [
      "rig/pelican_rig.js",
      "rig/pelican_motion_poses.js",
      "rig/pelican_skin_weights.js",
      "rig/gbike_rig.js",
      "rig/gbike_rig_classic.js",
    ],
    summary: "Skinned Pelican skeleton binding, wing-fan celebration poses, smooth avian skin-weight validation, Priority V9 & Classic V2 GBike rigs, 16-slot instanced TPU basket rack, and Drivetrain X-Ray edge lines.",
  }),
  Object.freeze({
    id: "world-shaders",
    title: "Mountain View 3D World, Materials & Post-FX",
    files: [
      "scenes/open_campus_world.js",
      "scenes/campus_worlds.js",
      "scenes/materials.js",
      "scenes/v5_aaa_environment.js",
      "scenes/v5_postfx_lighting.js",
      "scenes/v5_stan_encounter.js",
    ],
    summary: "GLB scene composition, origin normalization, golden-hour IBL/PCFSoftShadowMap lighting, custom GLSL sky/water/grass/dust shaders, procedural road/curb/paver PBR maps, and Stan T-Rex encounter staging.",
  }),
  Object.freeze({
    id: "audio-engine",
    title: "WebAudio Synthesis & Foley Engine",
    files: ["audio/game_audio.js", "audio/bike_sfx.js", "audio/lyria_score_b64.js"],
    summary: "Real-time procedural bicycle freehub clicks, belt hum, bell chime, wood-plank & gravel tire Foley, atrium glass shatter, TPU pickup chimes, Stan roar, and Lyria 3.5 score playback.",
  }),
  Object.freeze({
    id: "ui-tooling",
    title: "Frosted-Glass HUD, HTML & Build Tooling",
    files: ["index.html", "styles.css", "ui.js", "tools/download-assets.mjs", "vite.config.ts", "tsconfig.json", "package.json"],
    summary: "Unoccluded HUD, 30Hz Campus Radar minimap, 2D Polar Torque X-Ray card, Legal/Credits modal, GStatic SHA-256 GLB downloader, and Vite importmap build configuration.",
  }),
]);

export const MEDIA_FONT_CREDITS = Object.freeze([
  Object.freeze({
    id: "nano-textures",
    title: "Nano Banana PBR Texture Library (12 Maps)",
    source: "assets/nano_textures.js",
    license: "App Asset Bundle",
    details: "brickPavers, concretePath, lawnGrass, mulchSoil, foliageOak, foliageRedwood, pelicanFeathers, curtainGlass, dragonscaleTiles, scallopShell, bridgePlanks, cedarTimber.",
  }),
  Object.freeze({
    id: "omni-posters",
    title: "Omni Flash Chapter Reference Posters (5 Posters)",
    source: "assets/omni_posters.js",
    license: "App Asset Bundle",
    details: "Pre-baked 16:9 JPEG reference posters (clip1 through clip5) embedded as origin:null-safe Data URLs.",
  }),
  Object.freeze({
    id: "lyria-soundtrack",
    title: "Lyria 3.5 Original Campus Soundtrack & WebAudio Foley",
    source: "audio/lyria_score_b64.js, audio/game_audio.js, audio/bike_sfx.js",
    license: "App Asset Bundle",
    details: "112 BPM California indie-funk & electric Rhodes theme generated with Lyria 3.5 (LAME 3.101 MP3 encoding), paired with Web Audio API procedural physics Foley.",
  }),
  Object.freeze({
    id: "svg-emblems",
    title: "Inline Vector Badges & Emblem Icons",
    source: "index.html",
    license: "App Source",
    details: "Custom portrait 1:1.24 TPU 8i silicon package SVG badge, 4-color Gradient Canopy origami pinwheel favicon/preloader mark, and stroke UI iconography.",
  }),
  Object.freeze({
    id: "font-inter",
    title: "Inter Typeface (Weights 400, 500, 600, 700)",
    source: "inline_fonts.css (Self-hosted Base64 WOFF2)",
    license: "SIL OFL 1.1",
    details: "UI sans-serif typeface by The Inter Project Authors (Rasmus Andersson), licensed under the SIL Open Font License, Version 1.1.",
  }),
  Object.freeze({
    id: "font-space-grotesk",
    title: "Space Grotesk Typeface (Weights 400, 500, 600, 700)",
    source: "inline_fonts.css (Self-hosted Base64 WOFF2)",
    license: "SIL OFL 1.1",
    details: "Geometric display typeface by Florian Karsten, licensed under the SIL Open Font License, Version 1.1.",
  }),
  Object.freeze({
    id: "font-jetbrains-mono",
    title: "JetBrains Mono Typeface (Weights 400, 500, 600, 700)",
    source: "inline_fonts.css (Self-hosted Base64 WOFF2)",
    license: "SIL OFL 1.1",
    details: "Tabular monospace telemetry & keycap typeface by JetBrains s.r.o., licensed under the SIL Open Font License, Version 1.1.",
  }),
]);

export const LIBRARY_CREDITS = Object.freeze([
  Object.freeze({
    id: "threejs",
    name: "Three.js (r186)",
    files: "vendor/three.module.js, vendor/three.core.js",
    license: "MIT",
    copyright: "Copyright (c) 2010-2026 Three.js Authors",
    role: "Core WebGL2 3D scene graph, PBR materials, skinned meshes, instancing, shadows, and GLSL shaders.",
  }),
  Object.freeze({
    id: "threejs-addons",
    name: "Three.js JSM Addons (r186)",
    files: "vendor/OrbitControls.js, vendor/GLTFLoader.js, vendor/BufferGeometryUtils.js, vendor/SkeletonUtils.js",
    license: "MIT",
    copyright: "Copyright (c) 2010-2026 Three.js Authors",
    role: "Orbit camera controls, binary GLB parsing, geometry merging, and rigged skeleton cloning.",
  }),
  Object.freeze({
    id: "vite",
    name: "Vite (^8.3.0)",
    files: "package.json, vite.config.ts",
    license: "MIT",
    copyright: "Copyright (c) 2019-present VoidZero Inc. & Vite Contributors",
    role: "Local development server (port 3000) and production ES module bundler.",
  }),
  Object.freeze({
    id: "google-genai",
    name: "@google/genai (^2.4.0)",
    files: "package.json",
    license: "Apache-2.0",
    copyright: "Copyright Google LLC",
    role: "Declared project dependency (not invoked for runtime client-side gameplay by default).",
  }),
  Object.freeze({
    id: "typescript",
    name: "TypeScript (^7.0.2)",
    files: "package.json, tsconfig.json",
    license: "Apache-2.0",
    copyright: "Copyright Microsoft Corporation",
    role: "Development static type checking (`npm run lint` -> `tsc --noEmit`).",
  }),
  Object.freeze({
    id: "types-node",
    name: "@types/node (^22.14.0)",
    files: "package.json",
    license: "MIT",
    copyright: "Copyright DefinitelyTyped Contributors",
    role: "Node.js TypeScript type definitions for Vite config and asset download scripts.",
  }),
]);

export const REFERENCE_CREDITS = Object.freeze([
  Object.freeze({
    id: "ref-landmarks",
    category: "Mountain View Landmarks",
    title: "North Bayshore & Mountain View Campus Architecture",
    items: [
      "Gradient Canopy (2000 N Shoreline Blvd) — Scalloped dragonscale roof shell, mass-timber soffits, Visitor Experience plaza, and origami wind pinwheels",
      "Bay View Campus (1200 Joaquin Rd) — Twin double-curved catenary dragonscale roofs, clerestories, and Stevens Creek retention pond",
      "Googleplex Courtyard (1600 Amphitheatre Pkwy) — Buildings 40-42 umbrellas, redwoods, Bronze 'Stan' T-Rex, and pink plastic flamingos",
      "Android Lawn Sculpture Park — Bugdroid mascot & Cupcake, Donut, Gingerbread, Ice Cream Sandwich, KitKat, and Lollipop dessert statues",
      "Stevens Creek Trail & Timber/Corten Arch Bridge leading to Shoreline Amphitheatre twin tensile peaks & Santa Cruz Mountains horizon",
    ],
  }),
  Object.freeze({
    id: "ref-hardware",
    category: "Vehicles, Hardware & Culture",
    title: "Bicycles, Autonomous Fleet, Silicon & Campus Touches",
    items: [
      "Priority Bicycles Google GBike — Step-through cruiser geometry, Gates Carbon Drive belt drive, red wire basket, and 4-color campus livery",
      "Waymo 6th-Gen Ojai (Zeekr CM1e) — Autonomous electric robotaxi with roof LiDAR dome and perimeter perception pods",
      "Google TPU 8i / Trillium / Ironwood — AI accelerator silicon packaging & liquid-cooled supercluster racks",
      "Microkitchen (MK) Espresso Carts & Noogler Propeller Cap",
    ],
  }),
  Object.freeze({
    id: "ref-science",
    category: "Biological & Engineering References",
    title: "Avian Kinematics, Math & Rendering Pipelines",
    items: [
      "American White Pelican (Pelecanus erythrorhynchos) — Native San Francisco Bay & Stevens Creek marsh waterbird",
      "Closed-form Two-Bone Avian Inverse Kinematics (rig/kin.js & rig/ik_solver.js)",
      "Mulberry32 32-bit Deterministic Seeded PRNG (Tommy Ettinger)",
      "WebGL2 PBR Shading, 4096px PCFSoftShadowMap, PMREMGenerator IBL, ACES/AgX Tone Mapping, CatmullRomCurve3 splines",
      "Blender 5.2 glTF/GLB asset pipeline & LAME 3.101 MP3 soundtrack encoding",
    ],
  }),
  Object.freeze({
    id: "ref-trademarks",
    category: "Trademark Notice",
    title: "Third-Party Marks & Fair-Use Disclaimer",
    items: [
      "Google, Googleplex, Gradient Canopy, Bay View, Android, Bugdroid, Waymo, TPU, Gemini, Lyria, and Noogler are trademarks of Google LLC.",
      "Priority Bicycles, Gates Carbon Drive, Shoreline Amphitheatre, and KitKat are trademarks of their respective owners.",
      "All real-world landmarks, vehicles, hardware, and brand marks are depicted strictly as creative, educational, and artistic references with no implied official affiliation or endorsement.",
    ],
  }),
]);

export const STANDARD_LICENSE_TEXTS = Object.freeze([
  Object.freeze({
    spdx: "MIT",
    title: "MIT License (Three.js, Three.js JSM Addons, Vite, @types/node)",
    text: `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,
  }),
  Object.freeze({
    spdx: "Apache-2.0",
    title: "Apache License 2.0 (@google/genai, TypeScript)",
    text: `Licensed under the Apache License, Version 2.0 (the "License"); you may not use these files except in compliance with the License. You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`,
  }),
  Object.freeze({
    spdx: "OFL-1.1",
    title: "SIL Open Font License 1.1 (Inter, Space Grotesk, JetBrains Mono)",
    text: `Licensed under the SIL Open Font License, Version 1.1 (https://openfontlicense.org). These fonts may be used, studied, modified, and redistributed freely (including embedded as self-hosted Base64 WOFF2 stylesheets), provided the fonts are not sold by themselves and reserved font names are respected where applicable.`,
  }),
]);

export const TERMS_TEMPLATE = Object.freeze({
  title: "Terms of Use (Template)",
  notice:
    "Template Notice: Replace every [BRACKETED_PLACEHOLDER] with your organization's legal details and consult qualified legal counsel before publishing.",
  meta: [
    { label: "Effective Date", value: "[EFFECTIVE_DATE]" },
    { label: "Operator", value: "[YOUR_ORGANIZATION_OR_MAINTAINER_NAME]" },
    { label: "Application URL", value: "[APP_PUBLIC_URL]" },
    { label: "Contact Email", value: "[CONTACT_EMAIL]" },
  ],
  sections: [
    {
      heading: "1. Acceptance of Terms",
      paragraphs: [
        "By accessing or using Pelican Campus Quest (the \"Application\"), including its interactive 3D campus world, audio, visuals, and documentation, you agree to be bound by these Terms of Use (\"Terms\"). If you do not agree, do not access or use the Application.",
        "If you access the Application on behalf of an organization, you represent that you have authority to bind that organization to these Terms.",
      ],
    },
    {
      heading: "2. Eligibility",
      paragraphs: [
        "You represent that you are at least [MINIMUM_AGE] years old (or the age of digital/legal consent in your jurisdiction) and legally able to enter into a binding agreement.",
      ],
    },
    {
      heading: "3. License to Use the Application",
      paragraphs: [
        "Subject to your compliance with these Terms, [YOUR_ORGANIZATION_OR_MAINTAINER_NAME] grants you a limited, non-exclusive, non-transferable, revocable license to run the Application in a compatible browser solely for [PERMITTED_PURPOSE: personal, educational, and non-commercial interactive entertainment].",
        "Third-party open-source packages, fonts, and libraries remain subject to their respective licenses documented in the Credits & Licenses tab.",
      ],
    },
    {
      heading: "4. Acceptable Use & Restrictions",
      bullets: [
        "Do not use the Application for any unlawful, fraudulent, harmful, or abusive purpose.",
        "Do not attempt to disrupt, overload, scrape, or interfere with hosting infrastructure or static asset CDNs.",
        "Do not remove or obscure copyright, open-source license, attribution, or trademark notices.",
        "Do not misrepresent this interactive tribute/simulation as an official product, safety system, or navigation tool of any referenced brand.",
      ],
    },
    {
      heading: "5. Intellectual Property & Third-Party Trademarks",
      paragraphs: [
        "Except for third-party open-source software, fonts, and referenced marks, original source code, shaders, procedural rigs, UI chrome, and custom assets belong to [YOUR_ORGANIZATION_OR_MAINTAINER_NAME] and its licensors.",
        "Real-world Mountain View landmarks, bicycle designs, autonomous vehicles, mascots, chip names, and product marks remain the property of their respective owners and are depicted purely for creative and educational reference.",
      ],
    },
    {
      heading: "6. Third-Party Services & Static Assets",
      paragraphs: [
        "Where the Application or its build tooling fetches static 3D asset packs (such as .glb packs mirrored via www.gstatic.com), availability and transmission are subject to the third-party host's infrastructure. [YOUR_ORGANIZATION_OR_MAINTAINER_NAME] is not responsible for third-party uptime.",
      ],
    },
    {
      heading: "7. Disclaimer of Warranties",
      paragraphs: [
        "THE APPLICATION IS PROVIDED \"AS IS\" AND \"AS AVAILABLE,\" WITHOUT WARRANTIES OF ANY KIND, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. COMPATIBILITY ACROSS ALL WEBGPU/WEBGL2 DRIVERS OR DEVICES IS NOT GUARANTEED.",
      ],
    },
    {
      heading: "8. Limitation of Liability",
      paragraphs: [
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, [YOUR_ORGANIZATION_OR_MAINTAINER_NAME] AND ITS CONTRIBUTORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR GOODWILL. TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED [LIABILITY_CAP: e.g., USD $100 OR AMOUNTS PAID IN THE PRIOR 12 MONTHS].",
      ],
    },
    {
      heading: "9. Indemnification",
      paragraphs: [
        "You agree to indemnify and hold harmless [YOUR_ORGANIZATION_OR_MAINTAINER_NAME] and its contributors from claims, damages, and reasonable expenses arising from your violation of these Terms or misuse of the Application.",
      ],
    },
    {
      heading: "10. Termination & Changes",
      paragraphs: [
        "[YOUR_ORGANIZATION_OR_MAINTAINER_NAME] may modify, suspend, or discontinue the Application at any time and update these Terms by revising [EFFECTIVE_DATE]. Continued use after updates take effect constitutes acceptance.",
      ],
    },
    {
      heading: "11. Governing Law & Contact",
      paragraphs: [
        "These Terms are governed by the laws of [GOVERNING_JURISDICTION], without regard to conflict-of-law rules. Disputes shall be resolved in courts located in [VENUE_CITY_AND_STATE_OR_COUNTRY].",
        "Contact: [YOUR_ORGANIZATION_OR_MAINTAINER_NAME] · [CONTACT_EMAIL] · [OPTIONAL_MAILING_ADDRESS]",
      ],
    },
  ],
});

export const PRIVACY_TEMPLATE = Object.freeze({
  title: "Privacy Policy (Template)",
  notice:
    "Template Notice: Replace every [BRACKETED_PLACEHOLDER] and update Section 2C / Section 3 if you add hosting analytics, user accounts, or runtime AI API calls.",
  meta: [
    { label: "Effective Date", value: "[EFFECTIVE_DATE]" },
    { label: "Controller", value: "[YOUR_ORGANIZATION_OR_MAINTAINER_NAME]" },
    { label: "Application URL", value: "[APP_PUBLIC_URL]" },
    { label: "Privacy Contact", value: "[CONTACT_EMAIL]" },
  ],
  sections: [
    {
      heading: "1. Overview",
      paragraphs: [
        "This Privacy Policy describes how [YOUR_ORGANIZATION_OR_MAINTAINER_NAME] handles information when you use Pelican Campus Quest. By default, the Application executes locally in your browser using WebGL2, Web Audio API, and static/inlined assets, with no user accounts or sign-in required.",
      ],
    },
    {
      heading: "2. Information Processed",
      bullets: [
        "Local Browser Storage & Safe Fallback: An isolated storage shim falls back to ephemeral in-memory storage in sandboxed (origin:null) frames; no personal profiles or ad identifiers are stored by default.",
        "URL Configuration Flags: Query parameters (?cam=, ?map=, ?audio=, ?quality=, ?hud=0) are parsed locally in browser memory to configure your session.",
        "Hosting & Static Asset CDN Logs: Loading the app or mirroring .glb files from [HOSTING_PROVIDER] or www.gstatic.com involves standard HTTPS requests where infrastructure may temporarily log IP address, user-agent, timestamp, and asset path.",
        "Local Capability Detection: WebGL2 context details, devicePixelRatio, and AudioContext state are inspected strictly in memory to configure rendering quality and sound.",
        "Optional Analytics / AI Extensions: [DEFAULT: None enabled — no third-party ad SDKs, behavioral trackers, or runtime LLM requests. Replace this note if you add analytics or server APIs.]",
      ],
    },
    {
      heading: "3. Cookies & Tracking Technologies",
      paragraphs: [
        "By default, the Application sets no first-party marketing cookies or third-party tracking cookies. [If your hosting provider sets strictly necessary security/CDN cookies, list them here.]",
      ],
    },
    {
      heading: "4. How Information Is Used",
      paragraphs: [
        "Technical request metadata processed by hosting infrastructure is used solely to deliver scripts, fonts, audio, and 3D .glb geometry packs reliably, prevent abuse, and troubleshoot operational errors.",
      ],
    },
    {
      heading: "5. Data Sharing & Processors",
      paragraphs: [
        "We do not sell or rent personal information. Limited technical connection metadata may be processed by [HOSTING_PROVIDER] and static asset CDNs (such as gstatic.com), or disclosed if required by applicable law.",
      ],
    },
    {
      heading: "6. Data Retention & Security",
      paragraphs: [
        "Simulation state (bike coordinates, chip ledger, camera angle) lives transiently in memory and resets on reload. Hosting access logs, if enabled, are retained by [HOSTING_PROVIDER] for [RETENTION_PERIOD: e.g., 30 days]. We use HTTPS transport security where hosted.",
      ],
    },
    {
      heading: "7. Children's Privacy",
      paragraphs: [
        "The Application does not knowingly collect personal information from children under [CHILDREN_AGE_THRESHOLD: 13 (or 16 in EEA/UK)]. Contact [CONTACT_EMAIL] if you believe personal data was inadvertently submitted.",
      ],
    },
    {
      heading: "8. Your Privacy Rights (GDPR / EEA / UK / CCPA / CPRA)",
      paragraphs: [
        "Depending on your jurisdiction, you may request access, correction, deletion, portability, or restriction/objection regarding any personal data held about you, without discrimination. Submit requests to [CONTACT_EMAIL] with subject line \"Privacy Request\".",
      ],
    },
    {
      heading: "9. International Transfers & Policy Updates",
      paragraphs: [
        "Cross-border technical log transfers (if any) rely on [TRANSFER_MECHANISM: e.g., Standard Contractual Clauses]. Updates to this Policy will revise [EFFECTIVE_DATE].",
        "Privacy Contact: [YOUR_ORGANIZATION_OR_MAINTAINER_NAME] · [CONTACT_EMAIL] · [OPTIONAL_MAILING_ADDRESS]",
      ],
    },
  ],
});

export function formatLegalMarkdown(tabId) {
  if (tabId === "terms") {
    const lines = [
      `# ${TERMS_TEMPLATE.title}`,
      "",
      `> ${TERMS_TEMPLATE.notice}`,
      "",
      ...TERMS_TEMPLATE.meta.map((m) => `- **${m.label}:** ${m.value}`),
      "",
    ];
    for (const sec of TERMS_TEMPLATE.sections) {
      lines.push(`## ${sec.heading}`);
      if (sec.paragraphs) {
        for (const p of sec.paragraphs) lines.push("", p);
      }
      if (sec.bullets) {
        lines.push("");
        for (const b of sec.bullets) lines.push(`- ${b}`);
      }
      lines.push("");
    }
    return lines.join("\n");
  }

  if (tabId === "privacy") {
    const lines = [
      `# ${PRIVACY_TEMPLATE.title}`,
      "",
      `> ${PRIVACY_TEMPLATE.notice}`,
      "",
      ...PRIVACY_TEMPLATE.meta.map((m) => `- **${m.label}:** ${m.value}`),
      "",
    ];
    for (const sec of PRIVACY_TEMPLATE.sections) {
      lines.push(`## ${sec.heading}`);
      if (sec.paragraphs) {
        for (const p of sec.paragraphs) lines.push("", p);
      }
      if (sec.bullets) {
        lines.push("");
        for (const b of sec.bullets) lines.push(`- ${b}`);
      }
      lines.push("");
    }
    return lines.join("\n");
  }

  const lines = [
    "# Credits, Attributions & Licenses — Pelican Campus Quest",
    "",
    "## 1. 3D Mesh Packs (16 GLB Packs + Procedural 3D Geometry)",
  ];
  for (const pack of MESH_PACK_CREDITS) {
    lines.push(
      `- **${pack.title}** (\`${pack.slug}\` | \`${pack.modulePath}\` | ${pack.license})`,
      `  - Meshes: ${pack.nodes.join(", ")}`,
      `  - Notes: ${pack.notes}`
    );
  }
  lines.push("", "## 2. Application Code & Tooling");
  for (const mod of CODE_MODULE_CREDITS) {
    lines.push(`- **${mod.title}**: \`${mod.files.join("`, `")}\` — ${mod.summary}`);
  }
  lines.push("", "## 3. Textures, Posters, Audio & Fonts");
  for (const item of MEDIA_FONT_CREDITS) {
    lines.push(`- **${item.title}** (\`${item.source}\` | ${item.license}) — ${item.details}`);
  }
  lines.push("", "## 4. Third-Party Libraries & Dependencies");
  for (const lib of LIBRARY_CREDITS) {
    lines.push(`- **${lib.name}** (${lib.license} | ${lib.copyright}) — \`${lib.files}\` — ${lib.role}`);
  }
  lines.push("", "## 5. References & Trademark Notice");
  for (const ref of REFERENCE_CREDITS) {
    lines.push(`### ${ref.category}: ${ref.title}`);
    for (const entry of ref.items) lines.push(`- ${entry}`);
  }
  lines.push("", "## 6. Open-Source License Texts");
  for (const lic of STANDARD_LICENSE_TEXTS) {
    lines.push(`### ${lic.title} (${lic.spdx})`, "", lic.text, "");
  }
  return lines.join("\n");
}
