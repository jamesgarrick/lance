import { cfgNode, type CfgTree } from "./cfg-runtime";

export const cfgWeaponsVehicleWeapons = {
  "autocannon": cfgNode("autocannon_Base_F", {
    /** Cannon 30 mm */
    "30mm": cfgNode("autocannon_30mm", {
      /** CTWS Cannon 30 mm */
      "ctws": "autocannon_30mm_CTWS",
      /** CTWS Cannon 30 mm */
      "rcws": "autocannon_30mm_RCWS",
    }),
    /** Autocannon 35 mm */
    "35mm": cfgNode("autocannon_35mm", {}),
    "40mm": {
      /** Cannon 40 mm */
      "ctws": "autocannon_40mm_CTWS",
      /** Cannon 40 mm */
      "vtol_01": "autocannon_40mm_VTOL_01",
    },
  }),
  "bomb": {
    "03": {
      /** LOM-250G */
      "plane_cas_02": "Bomb_03_Plane_CAS_02_F",
    },
    "04": {
      /** GBU-12 */
      "plane_cas_01": "Bomb_04_Plane_CAS_01_F",
    },
    /** Leaflets Dispenser */
    "leaflets": cfgNode("Bomb_Leaflets", {}),
  },
  "bombcluster": {
    /** CBU-85 Cluster Bomb */
    "01": cfgNode("BombCluster_01_F", {}),
    /** RBK-500F */
    "02": cfgNode("BombCluster_02_F", {}),
    /** BL778 Cluster Bomb */
    "03": cfgNode("BombCluster_03_F", {}),
  },
  "bombdemine": {
    /** Demining Charge */
    "01": cfgNode("BombDemine_01_F", {}),
  },
  "cannon": {
    /** Cannon 105 mm */
    "105mm": cfgNode("cannon_105mm", {
      /** Cannon 105 mm */
      "vtol_01": "cannon_105mm_VTOL_01",
    }),
    /** Cannon 120 mm */
    "120mm": cfgNode("cannon_120mm", {
      /** Cannon 120 mm */
      "long": "cannon_120mm_long",
    }),
    /** Cannon 125mm */
    "125mm": cfgNode("cannon_125mm", {
      /** Cannon 125mm */
      "advanced": "cannon_125mm_advanced",
    }),
    /** Cannon 20mm */
    "20mm": cfgNode("cannon_20mm", {}),
    "30mm": {
      /** Cannon 30 mm */
      "plane_cas_02": "Cannon_30mm_Plane_CAS_02_F",
    },
    /** Railgun 75mm */
    "railgun": cfgNode("cannon_railgun", {
      /** Railgun 75mm */
      "fake": "cannon_railgun_fake",
    }),
  },
  "c": {
    "hatchback": {
      "01_f\nc_hatchback_01_sport_f\nc_hatchback_01_grey_f\nc_hatchback_01_green_f\nc_hatchback_01_blue_f\nc_hatchback_01_bluecustom_f\nc_hatchback_01_beigecustom_f\nc_hatchback_01_yellow_f\nc_hatchback_01_white_f\nc_hatchback_01_black_f\nc_hatchback_01_dark_f\nc_hatchback_01_sport_red_f\nc_hatchback_01_sport_blue_f\nc_hatchback_01_sport_orange_f\nc_hatchback_01_sport_white_f\nc_hatchback_01_sport_grey_f\nc_hatchback_01_sport_green_f\nc_suv_01_f\nsuv_01_base_red_f\nsuv_01_base_black_f\nsuv_01_base_grey_f\nsuv_01_base_orange_f\nc_van_01_transport_f\ni_g_van_01_transport_f\nc_van_01_box_f\nc_van_01_fuel_f\ni_g_van_01_fuel_f\nb_g_van_01_transport_f\no_g_van_01_transport_f\nb_g_van_01_fuel_f\no_g_van_01_fuel_f\nc_van_01_transport_white_f\nc_van_01_transport_red_f\nc_van_01_box_white_f\nc_van_01_box_red_f\nc_van_01_fuel_white_f\nc_van_01_fuel_red_f\nc_van_01_fuel_white_v2_f\nc_van_01_fuel_red_v2_f\ni_c_van_01_transport_f\ni_c_van_01_transport_brown_f\ni_c_van_01_transport_olive_f\nc_van_02_transport_f\nc_idap_van_02_transport_f\ni_g_van_02_transport_f\nb_g_van_02_transport_f\no_g_van_02_transport_f\ni_c_van_02_transport_f\nc_van_02_vehicle_f\nc_idap_van_02_vehicle_f\ni_g_van_02_vehicle_f\nb_g_van_02_vehicle_f\no_g_van_02_vehicle_f\ni_c_van_02_vehicle_f\nc_van_02_service_f\nc_tractor_01_f\ni_e_van_02_vehicle_f\ni_e_van_02_transport_f\ni_e_van_02_transport_mp": "C_Hatchback_01_F\nC_Hatchback_01_sport_F\nC_Hatchback_01_grey_F\nC_Hatchback_01_green_F\nC_Hatchback_01_blue_F\nC_Hatchback_01_bluecustom_F\nC_Hatchback_01_beigecustom_F\nC_Hatchback_01_yellow_F\nC_Hatchback_01_white_F\nC_Hatchback_01_black_F\nC_Hatchback_01_dark_F\nC_Hatchback_01_sport_red_F\nC_Hatchback_01_sport_blue_F\nC_Hatchback_01_sport_orange_F\nC_Hatchback_01_sport_white_F\nC_Hatchback_01_sport_grey_F\nC_Hatchback_01_sport_green_F\nC_SUV_01_F\nSUV_01_base_red_F\nSUV_01_base_black_F\nSUV_01_base_grey_F\nSUV_01_base_orange_F\nC_Van_01_transport_F\nI_G_Van_01_transport_F\nC_Van_01_box_F\nC_Van_01_fuel_F\nI_G_Van_01_fuel_F\nB_G_Van_01_transport_F\nO_G_Van_01_transport_F\nB_G_Van_01_fuel_F\nO_G_Van_01_fuel_F\nC_Van_01_transport_white_F\nC_Van_01_transport_red_F\nC_Van_01_box_white_F\nC_Van_01_box_red_F\nC_Van_01_fuel_white_F\nC_Van_01_fuel_red_F\nC_Van_01_fuel_white_v2_F\nC_Van_01_fuel_red_v2_F\nI_C_Van_01_transport_F\nI_C_Van_01_transport_brown_F\nI_C_Van_01_transport_olive_F\nC_Van_02_transport_F\nC_IDAP_Van_02_transport_F\nI_G_Van_02_transport_F\nB_G_Van_02_transport_F\nO_G_Van_02_transport_F\nI_C_Van_02_transport_F\nC_Van_02_vehicle_F\nC_IDAP_Van_02_vehicle_F\nI_G_Van_02_vehicle_F\nB_G_Van_02_vehicle_F\nO_G_Van_02_vehicle_F\nI_C_Van_02_vehicle_F\nC_Van_02_service_F\nC_Tractor_01_F\nI_E_Van_02_vehicle_F\nI_E_Van_02_transport_F\nI_E_Van_02_transport_MP_F",
    },
    "quadbike": {
      "01_f\nb_quadbike_01_f\no_quadbike_01_f\ni_quadbike_01_f\ni_g_quadbike_01_f\nb_g_quadbike_01_f\no_g_quadbike_01_f\nc_quadbike_01_black_f\nc_quadbike_01_blue_f\nc_quadbike_01_red_f\nc_quadbike_01_white_f\no_t_quadbike_01_ghex_f\nb_t_quadbike_01_f\ni_e_quadbike_01": "C_Quadbike_01_F\nB_Quadbike_01_F\nO_Quadbike_01_F\nI_Quadbike_01_F\nI_G_Quadbike_01_F\nB_G_Quadbike_01_F\nO_G_Quadbike_01_F\nC_Quadbike_01_black_F\nC_Quadbike_01_blue_F\nC_Quadbike_01_red_F\nC_Quadbike_01_white_F\nO_T_Quadbike_01_ghex_F\nB_T_Quadbike_01_F\nI_E_Quadbike_01_F",
    },
    "offroad": {
      "01_f\nc_offroad_01_repair_f\nb_g_offroad_01_repair_f\no_g_offroad_01_repair_f\ni_g_offroad_01_repair_f\ni_g_offroad_01_f\ni_g_offroad_01_at_f\ni_g_offroad_01_armed_f\nb_g_offroad_01_f\no_g_offroad_01_f\nb_g_offroad_01_armed_f\no_g_offroad_01_armed_f\nb_g_offroad_01_at_f\no_g_offroad_01_at_f\nc_offroad_01_red_f\nc_offroad_01_sand_f\nc_offroad_01_white_f\nc_offroad_01_blue_f\nc_offroad_01_darkred_f\nc_offroad_01_bluecustom_f\nc_offroad_luxe_f\nc_offroad_default_f\nc_offroad_stripped_f\nb_t_lsv_01_armed_f\nb_t_lsv_01_at_f\nb_t_lsv_01_armed_ctrg_f\nb_t_lsv_01_unarmed_f\nb_t_lsv_01_unarmed_ctrg_f\nb_lsv_01_armed_f\nb_lsv_01_at_f\nb_lsv_01_unarmed_f\nb_ctrg_lsv_01_light_f\nb_lsv_01_armed_black_f\nb_lsv_01_armed_olive_f\nb_lsv_01_armed_sand_f\nb_lsv_01_unarmed_black_f\nb_lsv_01_unarmed_olive_f\nb_lsv_01_unarmed_sand_f\nb_t_lsv_01_armed_black_f\nb_t_lsv_01_armed_olive_f\nb_t_lsv_01_armed_sand_f\nb_t_lsv_01_unarmed_black_f\nb_t_lsv_01_unarmed_olive_f\nb_t_lsv_01_unarmed_sand_f\no_t_lsv_02_armed_f\no_t_lsv_02_armed_viper_f\no_t_lsv_02_unarmed_f\no_t_lsv_02_at_f\no_t_lsv_02_unarmed_viper_f\no_lsv_02_armed_f\no_lsv_02_armed_viper_f\no_lsv_02_unarmed_f\no_lsv_02_at_f\no_lsv_02_unarmed_viper_f\no_t_lsv_02_armed_black_f\no_t_lsv_02_armed_ghex_f\no_t_lsv_02_armed_arid_f\no_t_lsv_02_unarmed_black_f\no_t_lsv_02_unarmed_ghex_f\no_t_lsv_02_unarmed_arid_f\no_lsv_02_armed_black_f\no_lsv_02_armed_ghex_f\no_lsv_02_armed_arid_f\no_lsv_02_unarmed_black_f\no_lsv_02_unarmed_ghex_f\no_lsv_02_unarmed_arid_f\nc_offroad_02_unarmed_f\nc_offroad_02_unarmed_black_f\nc_offroad_02_unarmed_blue_f\nc_offroad_02_unarmed_green_f\nc_offroad_02_unarmed_orange_f\nc_offroad_02_unarmed_red_f\nc_offroad_02_unarmed_white_f\ni_c_offroad_02_unarmed_f\ni_c_offroad_02_unarmed_brown_f\ni_c_offroad_02_unarmed_olive_f\ni_c_offroad_02_lmg_f\ni_c_offroad_02_at_f\nc_idap_offroad_01_f\nc_idap_offroad_02_unarmed_f\ni_e_offroad_01_f\ni_e_offroad_01_covered_f\ni_e_offroad_01_comms_f\nc_offroad_01_covered_f\nc_offroad_01_comms": "C_Offroad_01_F\nC_Offroad_01_repair_F\nB_G_Offroad_01_repair_F\nO_G_Offroad_01_repair_F\nI_G_Offroad_01_repair_F\nI_G_Offroad_01_F\nI_G_Offroad_01_AT_F\nI_G_Offroad_01_armed_F\nB_G_Offroad_01_F\nO_G_Offroad_01_F\nB_G_Offroad_01_armed_F\nO_G_Offroad_01_armed_F\nB_G_Offroad_01_AT_F\nO_G_Offroad_01_AT_F\nC_Offroad_01_red_F\nC_Offroad_01_sand_F\nC_Offroad_01_white_F\nC_Offroad_01_blue_F\nC_Offroad_01_darkred_F\nC_Offroad_01_bluecustom_F\nC_Offroad_luxe_F\nC_Offroad_default_F\nC_Offroad_stripped_F\nB_T_LSV_01_armed_F\nB_T_LSV_01_AT_F\nB_T_LSV_01_armed_CTRG_F\nB_T_LSV_01_unarmed_F\nB_T_LSV_01_unarmed_CTRG_F\nB_LSV_01_armed_F\nB_LSV_01_AT_F\nB_LSV_01_unarmed_F\nB_CTRG_LSV_01_light_F\nB_LSV_01_armed_black_F\nB_LSV_01_armed_olive_F\nB_LSV_01_armed_sand_F\nB_LSV_01_unarmed_black_F\nB_LSV_01_unarmed_olive_F\nB_LSV_01_unarmed_sand_F\nB_T_LSV_01_armed_black_F\nB_T_LSV_01_armed_olive_F\nB_T_LSV_01_armed_sand_F\nB_T_LSV_01_unarmed_black_F\nB_T_LSV_01_unarmed_olive_F\nB_T_LSV_01_unarmed_sand_F\nO_T_LSV_02_armed_F\nO_T_LSV_02_armed_viper_F\nO_T_LSV_02_unarmed_F\nO_T_LSV_02_AT_F\nO_T_LSV_02_unarmed_viper_F\nO_LSV_02_armed_F\nO_LSV_02_armed_viper_F\nO_LSV_02_unarmed_F\nO_LSV_02_AT_F\nO_LSV_02_unarmed_viper_F\nO_T_LSV_02_armed_black_F\nO_T_LSV_02_armed_ghex_F\nO_T_LSV_02_armed_arid_F\nO_T_LSV_02_unarmed_black_F\nO_T_LSV_02_unarmed_ghex_F\nO_T_LSV_02_unarmed_arid_F\nO_LSV_02_armed_black_F\nO_LSV_02_armed_ghex_F\nO_LSV_02_armed_arid_F\nO_LSV_02_unarmed_black_F\nO_LSV_02_unarmed_ghex_F\nO_LSV_02_unarmed_arid_F\nC_Offroad_02_unarmed_F\nC_Offroad_02_unarmed_black_F\nC_Offroad_02_unarmed_blue_F\nC_Offroad_02_unarmed_green_F\nC_Offroad_02_unarmed_orange_F\nC_Offroad_02_unarmed_red_F\nC_Offroad_02_unarmed_white_F\nI_C_Offroad_02_unarmed_F\nI_C_Offroad_02_unarmed_brown_F\nI_C_Offroad_02_unarmed_olive_F\nI_C_Offroad_02_LMG_F\nI_C_Offroad_02_AT_F\nC_IDAP_Offroad_01_F\nC_IDAP_Offroad_02_unarmed_F\nI_E_Offroad_01_F\nI_E_Offroad_01_covered_F\nI_E_Offroad_01_comms_F\nC_Offroad_01_covered_F\nC_Offroad_01_comms_F",
    },
  },
  "o": {
    "heli": {
      "light_02_dynamicloadout_f\no_heli_light_02_f\no_heli_light_02_unarmed_f\no_heli_light_02_v2_f\nb_heli_attack_01_f\nb_heli_attack_01_dynamicloadout_f\no_heli_attack_02_f\no_heli_attack_02_black_f\no_heli_attack_02_dynamicloadout_f\no_heli_attack_02_dynamicloadout_black_f\nb_heli_transport_01_f\nb_heli_transport_01_camo_f\ni_heli_transport_02_f\ni_plane_fighter_03_cas_f\ni_plane_fighter_03_aa_f\ni_plane_fighter_03_dynamicloadout_f\ni_heli_light_03_f\ni_heli_light_03_dynamicloadout_f\ni_heli_light_03_unarmed_f\nb_plane_cas_01_f\nb_plane_cas_01_dynamicloadout_f\no_plane_cas_02_f\no_plane_cas_02_dynamicloadout_f\nb_uav_02_f\no_uav_02_f\ni_uav_02_f\nb_uav_02_cas_f\no_uav_02_cas_f\ni_uav_02_cas_f\nb_uav_02_dynamicloadout_f\no_uav_02_dynamicloadout_f\ni_uav_02_dynamicloadout_f\nb_heli_transport_03_f\nb_heli_transport_03_unarmed_f\nb_heli_transport_03_black_f\nb_heli_transport_03_unarmed_green_f\no_heli_transport_04_f\no_heli_transport_04_ammo_f\no_heli_transport_04_bench_f\no_heli_transport_04_box_f\no_heli_transport_04_covered_f\no_heli_transport_04_fuel_f\no_heli_transport_04_medevac_f\no_heli_transport_04_repair_f\no_heli_transport_04_black_f\no_heli_transport_04_ammo_black_f\no_heli_transport_04_bench_black_f\no_heli_transport_04_box_black_f\no_heli_transport_04_covered_black_f\no_heli_transport_04_fuel_black_f\no_heli_transport_04_medevac_black_f\no_heli_transport_04_repair_black_f\nb_ctrg_heli_transport_01_sand_f\nb_ctrg_heli_transport_01_tropic_f\nb_t_uav_03_f\nb_t_uav_03_dynamicloadout_f\no_t_uav_04_cas_f\no_t_vtol_02_infantry_f\no_t_vtol_02_vehicle_f\no_t_vtol_02_infantry_dynamicloadout_f\no_t_vtol_02_vehicle_dynamicloadout_f\no_t_vtol_02_infantry_hex_f\no_t_vtol_02_infantry_ghex_f\no_t_vtol_02_infantry_grey_f\no_t_vtol_02_vehicle_hex_f\no_t_vtol_02_vehicle_ghex_f\no_t_vtol_02_vehicle_grey_f\no_plane_fighter_02_f\no_plane_fighter_02_stealth_f\ni_plane_fighter_04_f\nb_uav_05_f\nb_plane_cas_01_cluster_f\no_plane_cas_02_cluster_f\ni_plane_fighter_03_cluster_f\no_plane_fighter_02_cluster_f\ni_plane_fighter_04_cluster_f\nc_idap_heli_transport_02_f\ni_e_heli_light_03_dynamicloadout_f\ni_e_heli_light_03_unarmed": "O_Heli_Light_02_dynamicLoadout_F\nO_Heli_Light_02_F\nO_Heli_Light_02_unarmed_F\nO_Heli_Light_02_v2_F\nB_Heli_Attack_01_F\nB_Heli_Attack_01_dynamicLoadout_F\nO_Heli_Attack_02_F\nO_Heli_Attack_02_black_F\nO_Heli_Attack_02_dynamicLoadout_F\nO_Heli_Attack_02_dynamicLoadout_black_F\nB_Heli_Transport_01_F\nB_Heli_Transport_01_camo_F\nI_Heli_Transport_02_F\nI_Plane_Fighter_03_CAS_F\nI_Plane_Fighter_03_AA_F\nI_Plane_Fighter_03_dynamicLoadout_F\nI_Heli_light_03_F\nI_Heli_light_03_dynamicLoadout_F\nI_Heli_light_03_unarmed_F\nB_Plane_CAS_01_F\nB_Plane_CAS_01_dynamicLoadout_F\nO_Plane_CAS_02_F\nO_Plane_CAS_02_dynamicLoadout_F\nB_UAV_02_F\nO_UAV_02_F\nI_UAV_02_F\nB_UAV_02_CAS_F\nO_UAV_02_CAS_F\nI_UAV_02_CAS_F\nB_UAV_02_dynamicLoadout_F\nO_UAV_02_dynamicLoadout_F\nI_UAV_02_dynamicLoadout_F\nB_Heli_Transport_03_F\nB_Heli_Transport_03_unarmed_F\nB_Heli_Transport_03_black_F\nB_Heli_Transport_03_unarmed_green_F\nO_Heli_Transport_04_F\nO_Heli_Transport_04_ammo_F\nO_Heli_Transport_04_bench_F\nO_Heli_Transport_04_box_F\nO_Heli_Transport_04_covered_F\nO_Heli_Transport_04_fuel_F\nO_Heli_Transport_04_medevac_F\nO_Heli_Transport_04_repair_F\nO_Heli_Transport_04_black_F\nO_Heli_Transport_04_ammo_black_F\nO_Heli_Transport_04_bench_black_F\nO_Heli_Transport_04_box_black_F\nO_Heli_Transport_04_covered_black_F\nO_Heli_Transport_04_fuel_black_F\nO_Heli_Transport_04_medevac_black_F\nO_Heli_Transport_04_repair_black_F\nB_CTRG_Heli_Transport_01_sand_F\nB_CTRG_Heli_Transport_01_tropic_F\nB_T_UAV_03_F\nB_T_UAV_03_dynamicLoadout_F\nO_T_UAV_04_CAS_F\nO_T_VTOL_02_infantry_F\nO_T_VTOL_02_vehicle_F\nO_T_VTOL_02_infantry_dynamicLoadout_F\nO_T_VTOL_02_vehicle_dynamicLoadout_F\nO_T_VTOL_02_infantry_hex_F\nO_T_VTOL_02_infantry_ghex_F\nO_T_VTOL_02_infantry_grey_F\nO_T_VTOL_02_vehicle_hex_F\nO_T_VTOL_02_vehicle_ghex_F\nO_T_VTOL_02_vehicle_grey_F\nO_Plane_Fighter_02_F\nO_Plane_Fighter_02_Stealth_F\nI_Plane_Fighter_04_F\nB_UAV_05_F\nB_Plane_CAS_01_Cluster_F\nO_Plane_CAS_02_Cluster_F\nI_Plane_Fighter_03_Cluster_F\nO_Plane_Fighter_02_Cluster_F\nI_Plane_Fighter_04_Cluster_F\nC_IDAP_Heli_Transport_02_F\nI_E_Heli_light_03_dynamicLoadout_F\nI_E_Heli_light_03_unarmed_F",
      "attack_02_f\no_heli_attack_02_black_f\ni_plane_fighter_03_cas_f\nb_uav_02_f\no_uav_02_f\ni_uav_02_f\nb_t_uav_03_f\no_t_vtol_02_infantry_f\no_t_vtol_02_vehicle_f\no_t_vtol_02_infantry_hex_f\no_t_vtol_02_infantry_ghex_f\no_t_vtol_02_infantry_grey_f\no_t_vtol_02_vehicle_hex_f\no_t_vtol_02_vehicle_ghex_f\no_t_vtol_02_vehicle_grey": "O_Heli_Attack_02_F\nO_Heli_Attack_02_black_F\nI_Plane_Fighter_03_CAS_F\nB_UAV_02_F\nO_UAV_02_F\nI_UAV_02_F\nB_T_UAV_03_F\nO_T_VTOL_02_infantry_F\nO_T_VTOL_02_vehicle_F\nO_T_VTOL_02_infantry_hex_F\nO_T_VTOL_02_infantry_ghex_F\nO_T_VTOL_02_infantry_grey_F\nO_T_VTOL_02_vehicle_hex_F\nO_T_VTOL_02_vehicle_ghex_F\nO_T_VTOL_02_vehicle_grey_F",
    },
    "mrap": {
      "02_f\no_mrap_02_hmg_f\no_mrap_02_gmg_f\ni_mrap_03_f\ni_mrap_03_hmg_f\ni_mrap_03_gmg_f\nb_apc_wheeled_01_cannon_f\no_apc_wheeled_02_rcws_f\no_apc_wheeled_02_rcws_v2_f\ni_apc_wheeled_03_cannon_f\nb_apc_wheeled_03_cannon_f\no_t_mrap_02_ghex_f\no_t_mrap_02_hmg_ghex_f\no_t_mrap_02_gmg_ghex_f\nb_t_apc_wheeled_01_cannon_f\no_t_apc_wheeled_02_rcws_ghex_f\no_t_apc_wheeled_02_rcws_v2_ghex_f\nb_afv_wheeled_01_cannon_f\nb_t_afv_wheeled_01_cannon_f\nb_afv_wheeled_01_up_cannon_f\nb_t_afv_wheeled_01_up_cannon": "O_MRAP_02_F\nO_MRAP_02_hmg_F\nO_MRAP_02_gmg_F\nI_MRAP_03_F\nI_MRAP_03_hmg_F\nI_MRAP_03_gmg_F\nB_APC_Wheeled_01_cannon_F\nO_APC_Wheeled_02_rcws_F\nO_APC_Wheeled_02_rcws_v2_F\nI_APC_Wheeled_03_cannon_F\nB_APC_Wheeled_03_cannon_F\nO_T_MRAP_02_ghex_F\nO_T_MRAP_02_hmg_ghex_F\nO_T_MRAP_02_gmg_ghex_F\nB_T_APC_Wheeled_01_cannon_F\nO_T_APC_Wheeled_02_rcws_ghex_F\nO_T_APC_Wheeled_02_rcws_v2_ghex_F\nB_AFV_Wheeled_01_cannon_F\nB_T_AFV_Wheeled_01_cannon_F\nB_AFV_Wheeled_01_up_cannon_F\nB_T_AFV_Wheeled_01_up_cannon_F",
    },
    "truck": {
      "02_covered_f\no_truck_02_transport_f\ni_truck_02_covered_f\ni_truck_02_transport_f\nc_truck_02_covered_f\nc_truck_02_transport_f\no_truck_02_box_f\no_truck_02_medical_f\no_truck_02_ammo_f\no_truck_02_fuel_f\ni_truck_02_ammo_f\ni_truck_02_box_f\ni_truck_02_medical_f\ni_truck_02_fuel_f\ni_truck_02_mrl_f\nc_truck_02_fuel_f\nc_truck_02_box_f\no_truck_03_transport_f\no_truck_03_covered_f\no_truck_03_repair_f\no_truck_03_ammo_f\no_truck_03_fuel_f\no_truck_03_medical_f\no_truck_03_device_f\no_t_truck_02_f\no_t_truck_02_transport_f\no_t_truck_02_fuel_f\no_t_truck_02_ammo_f\no_t_truck_02_box_f\no_t_truck_02_medical_f\no_t_truck_03_transport_ghex_f\no_t_truck_03_covered_ghex_f\no_t_truck_03_repair_ghex_f\no_t_truck_03_ammo_ghex_f\no_t_truck_03_fuel_ghex_f\no_t_truck_03_medical_ghex_f\no_t_truck_03_device_ghex_f\nc_idap_truck_02_f\nc_idap_truck_02_transport_f\nc_idap_truck_02_water_f\ni_e_truck_02_f\ni_e_truck_02_transport_f\ni_e_truck_02_fuel_f\ni_e_truck_02_ammo_f\ni_e_truck_02_box_f\ni_e_truck_02_medical_f\ni_e_truck_02_mrl": "O_Truck_02_covered_F\nO_Truck_02_transport_F\nI_Truck_02_covered_F\nI_Truck_02_transport_F\nC_Truck_02_covered_F\nC_Truck_02_transport_F\nO_Truck_02_box_F\nO_Truck_02_medical_F\nO_Truck_02_Ammo_F\nO_Truck_02_fuel_F\nI_Truck_02_ammo_F\nI_Truck_02_box_F\nI_Truck_02_medical_F\nI_Truck_02_fuel_F\nI_Truck_02_MRL_F\nC_Truck_02_fuel_F\nC_Truck_02_box_F\nO_Truck_03_transport_F\nO_Truck_03_covered_F\nO_Truck_03_repair_F\nO_Truck_03_ammo_F\nO_Truck_03_fuel_F\nO_Truck_03_medical_F\nO_Truck_03_device_F\nO_T_Truck_02_F\nO_T_Truck_02_transport_F\nO_T_Truck_02_fuel_F\nO_T_Truck_02_Ammo_F\nO_T_Truck_02_Box_F\nO_T_Truck_02_Medical_F\nO_T_Truck_03_transport_ghex_F\nO_T_Truck_03_covered_ghex_F\nO_T_Truck_03_repair_ghex_F\nO_T_Truck_03_ammo_ghex_F\nO_T_Truck_03_fuel_ghex_F\nO_T_Truck_03_medical_ghex_F\nO_T_Truck_03_device_ghex_F\nC_IDAP_Truck_02_F\nC_IDAP_Truck_02_transport_F\nC_IDAP_Truck_02_water_F\nI_E_Truck_02_F\nI_E_Truck_02_transport_F\nI_E_Truck_02_fuel_F\nI_E_Truck_02_Ammo_F\nI_E_Truck_02_Box_F\nI_E_Truck_02_Medical_F\nI_E_Truck_02_MRL_F",
    },
  },
  "cmflarelauncher": {
    /** Flares */
    "singles": cfgNode("CMFlareLauncher_Singles", {}),
    /** Flares */
    "triples": cfgNode("CMFlareLauncher_Triples", {}),
  },
  "deminingdisruptor": {
    /** Disruptor */
    "01": cfgNode("DeminingDisruptor_01_F", {}),
  },
  "i": {
    "heli": {
      "light_03_f\ni_heli_light_03_dynamicloadout_f\ni_heli_light_03_unarmed_f\no_heli_transport_04_f\no_heli_transport_04_ammo_f\no_heli_transport_04_bench_f\no_heli_transport_04_box_f\no_heli_transport_04_covered_f\no_heli_transport_04_fuel_f\no_heli_transport_04_medevac_f\no_heli_transport_04_repair_f\no_heli_transport_04_black_f\no_heli_transport_04_ammo_black_f\no_heli_transport_04_bench_black_f\no_heli_transport_04_box_black_f\no_heli_transport_04_covered_black_f\no_heli_transport_04_fuel_black_f\no_heli_transport_04_medevac_black_f\no_heli_transport_04_repair_black_f\ni_e_heli_light_03_dynamicloadout_f\ni_e_heli_light_03_unarmed": "I_Heli_light_03_F\nI_Heli_light_03_dynamicLoadout_F\nI_Heli_light_03_unarmed_F\nO_Heli_Transport_04_F\nO_Heli_Transport_04_ammo_F\nO_Heli_Transport_04_bench_F\nO_Heli_Transport_04_box_F\nO_Heli_Transport_04_covered_F\nO_Heli_Transport_04_fuel_F\nO_Heli_Transport_04_medevac_F\nO_Heli_Transport_04_repair_F\nO_Heli_Transport_04_black_F\nO_Heli_Transport_04_ammo_black_F\nO_Heli_Transport_04_bench_black_F\nO_Heli_Transport_04_box_black_F\nO_Heli_Transport_04_covered_black_F\nO_Heli_Transport_04_fuel_black_F\nO_Heli_Transport_04_medevac_black_F\nO_Heli_Transport_04_repair_black_F\nI_E_Heli_light_03_dynamicLoadout_F\nI_E_Heli_light_03_unarmed_F",
    },
    "plane": {
      "fighter_03_cas_f\nb_plane_cas_01_f\nb_plane_cas_01_dynamicloadout_f\no_plane_cas_02_f\no_plane_cas_02_dynamicloadout_f\nb_plane_fighter_01_f\nb_plane_fighter_01_stealth_f\no_plane_fighter_02_f\no_plane_fighter_02_stealth_f\ni_plane_fighter_04_f\nb_plane_cas_01_cluster_f\no_plane_cas_02_cluster_f\nb_plane_fighter_01_cluster_f\no_plane_fighter_02_cluster_f\ni_plane_fighter_04_cluster": "I_Plane_Fighter_03_CAS_F\nB_Plane_CAS_01_F\nB_Plane_CAS_01_dynamicLoadout_F\nO_Plane_CAS_02_F\nO_Plane_CAS_02_dynamicLoadout_F\nB_Plane_Fighter_01_F\nB_Plane_Fighter_01_Stealth_F\nO_Plane_Fighter_02_F\nO_Plane_Fighter_02_Stealth_F\nI_Plane_Fighter_04_F\nB_Plane_CAS_01_Cluster_F\nO_Plane_CAS_02_Cluster_F\nB_Plane_Fighter_01_Cluster_F\nO_Plane_Fighter_02_Cluster_F\nI_Plane_Fighter_04_Cluster_F",
    },
  },
  "gatling": {
    /** Minigun 20 mm */
    "20mm": cfgNode("gatling_20mm", {
      /** Minigun 20 mm */
      "vtol_01": "gatling_20mm_VTOL_01",
    }),
    /** GAU-12 Cannon 25 mm */
    "25mm": cfgNode("gatling_25mm", {}),
    /** Cannon Caseless 30 mm */
    "30mm": cfgNode("gatling_30mm", {
      /** Minigun 30 mm */
      "plane_cas_01": "Gatling_30mm_Plane_CAS_01_F",
      /** Cannon Caseless 30 mm */
      "vtol_02": "gatling_30mm_VTOL_02",
    }),
  },
  "gbu12bomblauncher": {
    "plane": {
      /** GBU-12 */
      "fighter_03": "GBU12BombLauncher_Plane_Fighter_03_F",
    },
  },
  "gmg": {
    /** Mk32 GMG 20 mm */
    "20mm": cfgNode("GMG_20mm", {}),
    /** RCWS GMG 40 mm */
    "40mm": cfgNode("GMG_40mm", {}),
  },
  "b": {
    "gmg": {
      "01_f\no_gmg_01_f\ni_gmg_01_f\nb_gmg_01_high_f\no_gmg_01_high_f\ni_gmg_01_high_f\nb_gmg_01_a_f\no_gmg_01_a_f\ni_gmg_01_a_f\nb_t_gmg_01_f\ni_e_gmg_01_f\ni_e_gmg_01_high_f\ni_e_gmg_01_a": "B_GMG_01_F\nO_GMG_01_F\nI_GMG_01_F\nB_GMG_01_high_F\nO_GMG_01_high_F\nI_GMG_01_high_F\nB_GMG_01_A_F\nO_GMG_01_A_F\nI_GMG_01_A_F\nB_T_GMG_01_F\nI_E_GMG_01_F\nI_E_GMG_01_high_F\nI_E_GMG_01_A_F",
    },
    "apc": {
      "tracked_01_rcws_f\nb_mbt_01_arty_f\no_mbt_02_arty_f\nb_boat_armed_01_minigun_f\no_boat_armed_01_hmg_f\ni_boat_armed_01_minigun_f\nb_mrap_01_gmg_f\no_mrap_02_gmg_f\ni_mrap_03_gmg_f\no_apc_wheeled_02_rcws_f\no_apc_wheeled_02_rcws_v2_f\nb_ugv_01_rcws_f\no_ugv_01_rcws_f\ni_ugv_01_rcws_f\nb_t_mrap_01_gmg_f\no_t_mrap_02_gmg_ghex_f\no_t_ugv_01_rcws_ghex_f\nb_t_ugv_01_rcws_olive_f\nb_t_apc_tracked_01_rcws_f\no_t_apc_wheeled_02_rcws_ghex_f\no_t_apc_wheeled_02_rcws_v2_ghex_f\nb_t_mbt_01_arty_f\no_t_mbt_02_arty_ghex_f\nb_t_boat_armed_01_minigun_f\no_t_boat_armed_01_hmg_f\ni_e_ugv_01_rcws": "B_APC_Tracked_01_rcws_F\nB_MBT_01_arty_F\nO_MBT_02_arty_F\nB_Boat_Armed_01_minigun_F\nO_Boat_Armed_01_hmg_F\nI_Boat_Armed_01_minigun_F\nB_MRAP_01_gmg_F\nO_MRAP_02_gmg_F\nI_MRAP_03_gmg_F\nO_APC_Wheeled_02_rcws_F\nO_APC_Wheeled_02_rcws_v2_F\nB_UGV_01_rcws_F\nO_UGV_01_rcws_F\nI_UGV_01_rcws_F\nB_T_MRAP_01_gmg_F\nO_T_MRAP_02_gmg_ghex_F\nO_T_UGV_01_rcws_ghex_F\nB_T_UGV_01_rcws_olive_F\nB_T_APC_Tracked_01_rcws_F\nO_T_APC_Wheeled_02_rcws_ghex_F\nO_T_APC_Wheeled_02_rcws_v2_ghex_F\nB_T_MBT_01_arty_F\nO_T_MBT_02_arty_ghex_F\nB_T_Boat_Armed_01_minigun_F\nO_T_Boat_Armed_01_hmg_F\nI_E_UGV_01_rcws_F",
      "tracked_01_rcws_f\nb_apc_tracked_01_crv_f\nb_mbt_01_arty_f\no_mbt_02_arty_f\no_apc_wheeled_02_rcws_f\no_apc_wheeled_02_rcws_v2_f\ni_mbt_03_cannon_f\nb_t_apc_tracked_01_crv_f\nb_t_apc_tracked_01_rcws_f\no_t_apc_wheeled_02_rcws_ghex_f\no_t_apc_wheeled_02_rcws_v2_ghex_f\nb_t_mbt_01_arty_f\no_t_mbt_02_arty_ghex_f\no_mbt_04_cannon_f\no_t_mbt_04_cannon": "B_APC_Tracked_01_rcws_F\nB_APC_Tracked_01_CRV_F\nB_MBT_01_arty_F\nO_MBT_02_arty_F\nO_APC_Wheeled_02_rcws_F\nO_APC_Wheeled_02_rcws_v2_F\nI_MBT_03_cannon_F\nB_T_APC_Tracked_01_CRV_F\nB_T_APC_Tracked_01_rcws_F\nO_T_APC_Wheeled_02_rcws_ghex_F\nO_T_APC_Wheeled_02_rcws_v2_ghex_F\nB_T_MBT_01_arty_F\nO_T_MBT_02_arty_ghex_F\nO_MBT_04_cannon_F\nO_T_MBT_04_cannon_F",
      "tracked_01_rcws_f\nb_apc_tracked_01_crv_f\nb_apc_tracked_01_aa_f\no_apc_tracked_02_cannon_f\no_apc_tracked_02_aa_f\nb_mbt_01_cannon_f\nb_mbt_01_arty_f\nb_mbt_01_mlrs_f\no_mbt_02_cannon_f\no_mbt_02_arty_f\nb_boat_armed_01_minigun_f\no_boat_armed_01_hmg_f\ni_boat_armed_01_minigun_f\no_mrap_02_f\no_mrap_02_hmg_f\no_mrap_02_gmg_f\ni_mrap_03_f\ni_mrap_03_hmg_f\ni_mrap_03_gmg_f\nb_apc_wheeled_01_cannon_f\no_apc_wheeled_02_rcws_f\no_apc_wheeled_02_rcws_v2_f\ni_apc_tracked_03_cannon_f\ni_mbt_03_cannon_f\nb_mbt_01_tusk_f\ni_apc_wheeled_03_cannon_f\nb_apc_wheeled_03_cannon_f\no_t_mrap_02_ghex_f\no_t_mrap_02_hmg_ghex_f\no_t_mrap_02_gmg_ghex_f\nb_t_apc_tracked_01_aa_f\nb_t_apc_tracked_01_crv_f\nb_t_apc_tracked_01_rcws_f\no_t_apc_tracked_02_cannon_ghex_f\no_t_apc_tracked_02_aa_ghex_f\nb_t_apc_wheeled_01_cannon_f\no_t_apc_wheeled_02_rcws_ghex_f\no_t_apc_wheeled_02_rcws_v2_ghex_f\nb_t_mbt_01_arty_f\nb_t_mbt_01_mlrs_f\nb_t_mbt_01_cannon_f\nb_t_mbt_01_tusk_f\no_t_mbt_02_cannon_ghex_f\no_t_mbt_02_arty_ghex_f\nb_t_boat_armed_01_minigun_f\no_t_boat_armed_01_hmg_f\nb_afv_wheeled_01_cannon_f\nb_t_afv_wheeled_01_cannon_f\nb_afv_wheeled_01_up_cannon_f\nb_t_afv_wheeled_01_up_cannon_f\ni_lt_01_at_f\ni_lt_01_scout_f\ni_lt_01_aa_f\ni_lt_01_cannon_f\no_mbt_04_cannon_f\no_t_mbt_04_cannon_f\no_mbt_04_command_f\no_t_mbt_04_command_f\ni_e_apc_tracked_03_cannon_f\no_mbt_02_railgun_f\no_t_mbt_02_railgun_ghex": "B_APC_Tracked_01_rcws_F\nB_APC_Tracked_01_CRV_F\nB_APC_Tracked_01_AA_F\nO_APC_Tracked_02_cannon_F\nO_APC_Tracked_02_AA_F\nB_MBT_01_cannon_F\nB_MBT_01_arty_F\nB_MBT_01_mlrs_F\nO_MBT_02_cannon_F\nO_MBT_02_arty_F\nB_Boat_Armed_01_minigun_F\nO_Boat_Armed_01_hmg_F\nI_Boat_Armed_01_minigun_F\nO_MRAP_02_F\nO_MRAP_02_hmg_F\nO_MRAP_02_gmg_F\nI_MRAP_03_F\nI_MRAP_03_hmg_F\nI_MRAP_03_gmg_F\nB_APC_Wheeled_01_cannon_F\nO_APC_Wheeled_02_rcws_F\nO_APC_Wheeled_02_rcws_v2_F\nI_APC_tracked_03_cannon_F\nI_MBT_03_cannon_F\nB_MBT_01_TUSK_F\nI_APC_Wheeled_03_cannon_F\nB_APC_Wheeled_03_cannon_F\nO_T_MRAP_02_ghex_F\nO_T_MRAP_02_hmg_ghex_F\nO_T_MRAP_02_gmg_ghex_F\nB_T_APC_Tracked_01_AA_F\nB_T_APC_Tracked_01_CRV_F\nB_T_APC_Tracked_01_rcws_F\nO_T_APC_Tracked_02_cannon_ghex_F\nO_T_APC_Tracked_02_AA_ghex_F\nB_T_APC_Wheeled_01_cannon_F\nO_T_APC_Wheeled_02_rcws_ghex_F\nO_T_APC_Wheeled_02_rcws_v2_ghex_F\nB_T_MBT_01_arty_F\nB_T_MBT_01_mlrs_F\nB_T_MBT_01_cannon_F\nB_T_MBT_01_TUSK_F\nO_T_MBT_02_cannon_ghex_F\nO_T_MBT_02_arty_ghex_F\nB_T_Boat_Armed_01_minigun_F\nO_T_Boat_Armed_01_hmg_F\nB_AFV_Wheeled_01_cannon_F\nB_T_AFV_Wheeled_01_cannon_F\nB_AFV_Wheeled_01_up_cannon_F\nB_T_AFV_Wheeled_01_up_cannon_F\nI_LT_01_AT_F\nI_LT_01_scout_F\nI_LT_01_AA_F\nI_LT_01_cannon_F\nO_MBT_04_cannon_F\nO_T_MBT_04_cannon_F\nO_MBT_04_command_F\nO_T_MBT_04_command_F\nI_E_APC_tracked_03_cannon_F\nO_MBT_02_railgun_F\nO_T_MBT_02_railgun_ghex_F",
    },
    "hmg": {
      "01_f\no_hmg_01_f\ni_hmg_01_f\nb_hmg_01_high_f\no_hmg_01_high_f\ni_hmg_01_high_f\nb_hmg_01_a_f\no_hmg_01_a_f\ni_hmg_01_a_f\nb_t_hmg_01_f\ni_e_hmg_01_f\ni_e_hmg_01_high_f\ni_e_hmg_01_a": "B_HMG_01_F\nO_HMG_01_F\nI_HMG_01_F\nB_HMG_01_high_F\nO_HMG_01_high_F\nI_HMG_01_high_F\nB_HMG_01_A_F\nO_HMG_01_A_F\nI_HMG_01_A_F\nB_T_HMG_01_F\nI_E_HMG_01_F\nI_E_HMG_01_high_F\nI_E_HMG_01_A_F",
    },
    "heli": {
      "attack_01_f\nb_heli_attack_01_dynamicloadout_f\no_heli_attack_02_f\no_heli_attack_02_black_f\no_heli_attack_02_dynamicloadout_f\no_heli_attack_02_dynamicloadout_black_f\nb_sdv_01_f\no_sdv_01_f\ni_sdv_01_f\nb_uav_01_f\no_uav_01_f\ni_uav_01_f\nb_uav_02_f\no_uav_02_f\ni_uav_02_f\nb_uav_02_cas_f\no_uav_02_cas_f\ni_uav_02_cas_f\nb_uav_02_dynamicloadout_f\no_uav_02_dynamicloadout_f\ni_uav_02_dynamicloadout_f\nb_static_designator_01_f\no_static_designator_02_f\nb_t_uav_03_f\nb_t_uav_03_dynamicloadout_f\no_t_uav_04_cas_f\nb_t_vtol_01_infantry_f\nb_t_vtol_01_vehicle_f\nb_t_vtol_01_armed_f\nb_t_vtol_01_infantry_blue_f\nb_t_vtol_01_infantry_olive_f\nb_t_vtol_01_vehicle_blue_f\nb_t_vtol_01_vehicle_olive_f\nb_t_vtol_01_armed_blue_f\nb_t_vtol_01_armed_olive_f\no_t_vtol_02_infantry_f\no_t_vtol_02_vehicle_f\no_t_vtol_02_infantry_dynamicloadout_f\no_t_vtol_02_vehicle_dynamicloadout_f\no_t_vtol_02_infantry_hex_f\no_t_vtol_02_infantry_ghex_f\no_t_vtol_02_infantry_grey_f\no_t_vtol_02_vehicle_hex_f\no_t_vtol_02_vehicle_ghex_f\no_t_vtol_02_vehicle_grey_f\nb_uav_05_f\nc_idap_uav_01_f\nb_afv_wheeled_01_up_cannon_f\nb_t_afv_wheeled_01_up_cannon_f\nb_ugv_02_demining_f\no_ugv_02_demining_f\ni_ugv_02_demining_f\ni_e_ugv_02_demining_f\nc_idap_ugv_02_demining_f\nb_w_static_designator_01_f\ni_e_uav_01_f\no_uav_01_mine": "B_Heli_Attack_01_F\nB_Heli_Attack_01_dynamicLoadout_F\nO_Heli_Attack_02_F\nO_Heli_Attack_02_black_F\nO_Heli_Attack_02_dynamicLoadout_F\nO_Heli_Attack_02_dynamicLoadout_black_F\nB_SDV_01_F\nO_SDV_01_F\nI_SDV_01_F\nB_UAV_01_F\nO_UAV_01_F\nI_UAV_01_F\nB_UAV_02_F\nO_UAV_02_F\nI_UAV_02_F\nB_UAV_02_CAS_F\nO_UAV_02_CAS_F\nI_UAV_02_CAS_F\nB_UAV_02_dynamicLoadout_F\nO_UAV_02_dynamicLoadout_F\nI_UAV_02_dynamicLoadout_F\nB_Static_Designator_01_F\nO_Static_Designator_02_F\nB_T_UAV_03_F\nB_T_UAV_03_dynamicLoadout_F\nO_T_UAV_04_CAS_F\nB_T_VTOL_01_infantry_F\nB_T_VTOL_01_vehicle_F\nB_T_VTOL_01_armed_F\nB_T_VTOL_01_infantry_blue_F\nB_T_VTOL_01_infantry_olive_F\nB_T_VTOL_01_vehicle_blue_F\nB_T_VTOL_01_vehicle_olive_F\nB_T_VTOL_01_armed_blue_F\nB_T_VTOL_01_armed_olive_F\nO_T_VTOL_02_infantry_F\nO_T_VTOL_02_vehicle_F\nO_T_VTOL_02_infantry_dynamicLoadout_F\nO_T_VTOL_02_vehicle_dynamicLoadout_F\nO_T_VTOL_02_infantry_hex_F\nO_T_VTOL_02_infantry_ghex_F\nO_T_VTOL_02_infantry_grey_F\nO_T_VTOL_02_vehicle_hex_F\nO_T_VTOL_02_vehicle_ghex_F\nO_T_VTOL_02_vehicle_grey_F\nB_UAV_05_F\nC_IDAP_UAV_01_F\nB_AFV_Wheeled_01_up_cannon_F\nB_T_AFV_Wheeled_01_up_cannon_F\nB_UGV_02_Demining_F\nO_UGV_02_Demining_F\nI_UGV_02_Demining_F\nI_E_UGV_02_Demining_F\nC_IDAP_UGV_02_Demining_F\nB_W_Static_Designator_01_F\nI_E_UAV_01_F\nO_UAV_01_Mine_F",
    },
    "static": {
      "aa_f\no_static_aa_f\ni_static_aa_f\nb_static_at_f\no_static_at_f\ni_static_at_f\nb_t_lsv_01_at_f\nb_lsv_01_at_f\nb_t_static_aa_f\nb_t_static_at_f\ni_e_static_aa_f\ni_e_static_at": "B_static_AA_F\nO_static_AA_F\nI_static_AA_F\nB_static_AT_F\nO_static_AT_F\nI_static_AT_F\nB_T_LSV_01_AT_F\nB_LSV_01_AT_F\nB_T_Static_AA_F\nB_T_Static_AT_F\nI_E_Static_AA_F\nI_E_Static_AT_F",
    },
    "mrap": {
      "01_f\nb_mrap_01_gmg_f\nb_mrap_01_hmg_f\nb_truck_01_transport_f\nb_truck_01_covered_f\nb_truck_01_mover_f\nb_truck_01_box_f\nb_truck_01_repair_f\nb_truck_01_ammo_f\nb_truck_01_fuel_f\nb_truck_01_medical_f\nb_t_mrap_01_f\nb_t_mrap_01_gmg_f\nb_t_mrap_01_hmg_f\nb_t_truck_01_transport_f\nb_t_truck_01_covered_f\nb_t_truck_01_mover_f\nb_t_truck_01_box_f\nb_t_truck_01_repair_f\nb_t_truck_01_ammo_f\nb_t_truck_01_fuel_f\nb_t_truck_01_medical_f\nb_truck_01_flatbed_f\nb_t_truck_01_flatbed_f\nb_truck_01_cargo_f\nb_t_truck_01_cargo": "B_MRAP_01_F\nB_MRAP_01_gmg_F\nB_MRAP_01_hmg_F\nB_Truck_01_transport_F\nB_Truck_01_covered_F\nB_Truck_01_mover_F\nB_Truck_01_box_F\nB_Truck_01_Repair_F\nB_Truck_01_ammo_F\nB_Truck_01_fuel_F\nB_Truck_01_medical_F\nB_T_MRAP_01_F\nB_T_MRAP_01_gmg_F\nB_T_MRAP_01_hmg_F\nB_T_Truck_01_transport_F\nB_T_Truck_01_covered_F\nB_T_Truck_01_mover_F\nB_T_Truck_01_box_F\nB_T_Truck_01_Repair_F\nB_T_Truck_01_ammo_F\nB_T_Truck_01_fuel_F\nB_T_Truck_01_medical_F\nB_Truck_01_flatbed_F\nB_T_Truck_01_flatbed_F\nB_Truck_01_cargo_F\nB_T_Truck_01_cargo_F",
    },
  },
  "hmg": {
    /** RCWS HMG 12.7 mm */
    "127": cfgNode("HMG_127", {
      /** RCWS HMG 12.7 mm */
      "afv": "HMG_127_AFV",
      /** RCWS HMG 12.7 mm */
      "apc": "HMG_127_APC",
      /** Mk30 HMG .50 */
      "lsv_01": "HMG_127_LSV_01",
      /** RCWS HMG 12.7 mm */
      "mbt": "HMG_127_MBT",
      /** RCWS HMG 12.7 mm */
      "ugv": "HMG_127_UGV",
    }),
    /** Mk30 HMG .50 */
    "01": cfgNode("HMG_01", {}),
    /** M2 HMG .50 */
    "m2": cfgNode("HMG_M2", {}),
    /** NSVT-M HMG 12.7 mm */
    "nsvt": cfgNode("HMG_NSVT", {}),
    /** Mk30 HMG .50 */
    "static": cfgNode("HMG_static", {}),
  },
  "laserdesignator": {
    /** Laser Marker */
    "mounted": cfgNode("Laserdesignator_mounted", {}),
    /** Laser Marker */
    "pilotcamera": cfgNode("Laserdesignator_pilotCamera", {}),
    /** Laser Marker */
    "vehicle": cfgNode("Laserdesignator_vehicle", {}),
  },
  "launcher": {
    /** SPG-9 */
    "spg9": cfgNode("launcher_SPG9", {}),
  },
  "lmg": {
    "65mm": {
      /** RCWS LMG 6.5 mm */
      "body": "LMG_65mm_body",
    },
    /** Coaxial MG 7.62 mm */
    "coax": cfgNode("LMG_coax", {
      /** Coaxial MG 7.62 mm */
      "ext": "LMG_coax_ext",
    }),
    /** M200 LMG 6.5 mm */
    "m200": cfgNode("LMG_M200", {
      /** M200 LMG 6.5 mm */
      "body": "LMG_M200_body",
    }),
    /** Minigun 6.5 mm */
    "minigun": cfgNode("LMG_Minigun", {
      /** Minigun 6.5 mm */
      "heli": "LMG_Minigun_heli",
      /** Minigun 6.5 mm */
      "transport": "LMG_Minigun_Transport",
      /** Minigun 6.5 mm */
      "transport2": "LMG_Minigun_Transport2",
    }),
    /** Minigun 6.5 mm */
    "minigun2": cfgNode("LMG_Minigun2", {}),
    /** RCWS LMG 6.5 mm */
    "rcws": cfgNode("LMG_RCWS", {}),
  },
  "m134": {
    /** 2x M134 Minigun 7.62 mm */
    "minigun": cfgNode("M134_minigun", {}),
  },
  "missile": {
    "aa": {
      /** Sahr-3 */
      "03_plane_cas_02": "Missile_AA_03_Plane_CAS_02_F",
      /** Falchion-22 */
      "04_plane_cas_01": "Missile_AA_04_Plane_CAS_01_F",
    },
    "agm": {
      /** Sharur */
      "01_plane_cas_02": "Missile_AGM_01_Plane_CAS_02_F",
      /** Macer */
      "02_plane_cas_01": "Missile_AGM_02_Plane_CAS_01_F",
    },
  },
  "missiles": {
    /** ASRAAM */
    "asraam": cfgNode("missiles_ASRAAM", {}),
    /** DAGR */
    "dagr": cfgNode("missiles_DAGR", {}),
    /** DAR */
    "dar": cfgNode("missiles_DAR", {}),
    /** FireFIST ATGM */
    "firefist": cfgNode("missiles_Firefist", {}),
    /** Jian */
    "jian": cfgNode("missiles_Jian", {}),
    /** SAAMI */
    "saami": cfgNode("missiles_SAAMI", {}),
    /** Skalpel ATGM */
    "scalpel": cfgNode("missiles_SCALPEL", {}),
    /** Titan Missile */
    "titan": cfgNode("missiles_titan", {
      /** Titan Missile */
      "aa": "missiles_titan_AA",
      /** Titan Missile */
      "static": "missiles_titan_static",
    }),
    /** 9M135 Vorona */
    "vorona": cfgNode("missiles_Vorona", {}),
    /** Zephyr */
    "zephyr": cfgNode("missiles_Zephyr", {}),
  },
  "mmg": {
    "01": {
      /** Navid 9.3 mm */
      "vehicle": "MMG_01_vehicle",
    },
    "02": {
      /** SPMG .338 */
      "coax": "MMG_02_coax",
      /** SPMG .338 */
      "vehicle": "MMG_02_vehicle",
    },
  },
  "mortar": {
    "155mm": {
      /** Howitzer 155 mm */
      "amos": "mortar_155mm_AMOS",
    },
    /** Mortar 82 mm */
    "82mm": cfgNode("mortar_82mm", {}),
  },
  "probinglaser": {
    /** Sampling Laser */
    "01": cfgNode("ProbingLaser_01_F", {}),
  },
  "probingweapon": {
    /** Sampling Laser */
    "01": cfgNode("ProbingWeapon_01_F", {}),
    /** Biopsy Probe */
    "02": cfgNode("ProbingWeapon_02_F", {}),
  },
  "rocket": {
    "03": {
      /** Tratnyr */
      "ap_plane_cas_02": "Rocket_03_AP_Plane_CAS_02_F",
      /** Tratnyr */
      "he_plane_cas_02": "Rocket_03_HE_Plane_CAS_02_F",
    },
    "04": {
      /** Shrieker */
      "ap_plane_cas_01": "Rocket_04_AP_Plane_CAS_01_F",
      /** Shrieker */
      "he_plane_cas_01": "Rocket_04_HE_Plane_CAS_01_F",
    },
  },
  "rockets": {
    "230mm": {
      /** 230 mm Rocket */
      "gat": "rockets_230mm_GAT",
    },
    /** Skyfire */
    "skyfire": cfgNode("rockets_Skyfire", {}),
  },
  "twin": {
    "cannon": {
      /** Twin Cannon 20mm */
      "20mm": "Twin_Cannon_20mm",
      /** Twin Cannon 20mm */
      "20mm_gunpod": "Twin_Cannon_20mm_gunpod",
    },
  },
  "weapon": {
    "agm": {
      /** Macer II */
      "65launcher": "weapon_AGM_65Launcher",
      /** KH25 Kedge */
      "kh25launcher": "weapon_AGM_KH25Launcher",
    },
    /** AMRAAM */
    "amraamlauncher": cfgNode("weapon_AMRAAMLauncher", {}),
    /** BIM 9X */
    "bim9xlauncher": cfgNode("weapon_BIM9xLauncher", {}),
    "cannon": {
      /** Gatling Cannon 20mm */
      "phalanx": "weapon_Cannon_Phalanx",
    },
    "fighter": {
      /** M61 Minigun 20 mm */
      "gun20mm_aa": "weapon_Fighter_Gun20mm_AA",
      /** Gsh Cannon 30mm */
      "gun_30mm": "weapon_Fighter_Gun_30mm",
    },
    /** GBU 12 */
    "gbu12launcher": cfgNode("weapon_GBU12Launcher", {}),
    /** AGM-88C HARM */
    "harmlauncher": cfgNode("weapon_HARMLauncher", {}),
    /** KAB 250 */
    "kab250launcher": cfgNode("weapon_KAB250Launcher", {}),
    /** KH58 ARM */
    "kh58launcher": cfgNode("weapon_KH58Launcher", {}),
    "lgblauncherbase": cfgNode("weapon_LGBLauncherBase", {}),
    /** MIM-145 Defender */
    "mim145launcher": cfgNode("weapon_mim145Launcher", {}),
    /** R73 Archer */
    "r73launcher": cfgNode("weapon_R73Launcher", {}),
    /** R77 Adder */
    "r77launcher": cfgNode("weapon_R77Launcher", {}),
    /** RIM 116 Spartan */
    "rim116launcher": cfgNode("weapon_rim116Launcher", {}),
    /** RIM 162 Centurion */
    "rim162launcher": cfgNode("weapon_rim162Launcher", {}),
    /** S-750 Rhea */
    "s750launcher": cfgNode("weapon_s750Launcher", {}),
    /** Small Diameter Bomb */
    "sdblauncher": cfgNode("weapon_SDBLauncher", {}),
    "shipcannon": {
      /** Cannon 120 mm */
      "120mm": "weapon_ShipCannon_120mm",
    },
    "vls": {
      /** Venator Cruise Missile */
      "01": "weapon_VLS_01",
    },
    "vlsbase": cfgNode("weapon_VLSBase", {}),
  },
} as const satisfies CfgTree;

export type CfgWeaponsVehicleWeapons = typeof cfgWeaponsVehicleWeapons;


export const vehicleWeapons = {
  cfgWeaponsVehicleWeapons,
} as const;
