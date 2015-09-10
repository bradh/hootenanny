/*
 * This file is part of Hootenanny.
 *
 * Hootenanny is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * --------------------------------------------------------------------
 *
 * The following copyright notices are generated automatically. If you
 * have a new notice to add, please use the format:
 * " * @copyright Copyright ..."
 * This will properly maintain the copyright information. DigitalGlobe
 * copyrights will be updated automatically.
 *
 * @copyright Copyright (C) 2014 DigitalGlobe (http://www.digitalglobe.com/)
 */

/*
    HGISv20 One2one rules
*/

hgis20.rules = {
    // Tags/Attributes for individual layers
    // layerIn = Rules for Import ONLY
    // layerCommon = Rules for Import and Export
    // layerOut = Rules for Export ONLY. NOTE: These get swapped around before use
    layerIn : [
//      ['XtableName','ADMIN0','XXX','XXX'],
//      ['XtableName','Admin0_Access_To_Services','XXX','XXX'],
//      ['XtableName','Admin0_Education','XXX','XXX'],
//      ['XtableName','Admin0_Employment','XXX','XXX'],
//      ['XtableName','Admin0_Household_Goods','XXX','XXX'],
//      ['XtableName','Admin0_Mortality','XXX','XXX'],
//      ['XtableName','Admin0_Population','XXX','XXX'],
//      ['XtableName','Admin0_Poverty','XXX','XXX'],
//      ['XtableName','ADMIN1','XXX','XXX'],
//      ['XtableName','Admin1_Access_To_Services','XXX','XXX'],
//      ['XtableName','Admin1_Education','XXX','XXX'],
//      ['XtableName','Admin1_Employment','XXX','XXX'],
//      ['XtableName','Admin1_Household_Goods','XXX','XXX'],
//      ['XtableName','Admin1_Mortality','XXX','XXX'],
//      ['XtableName','Admin1_Population','XXX','XXX'],
//      ['XtableName','Admin1_Poverty','XXX','XXX'],
//      ['XtableName','ADMIN2','XXX','XXX'],
//      ['XtableName','Admin2_Access_To_Services','XXX','XXX'],
//      ['XtableName','Admin2_Education','XXX','XXX'],
//      ['XtableName','Admin2_Employment','XXX','XXX'],
//      ['XtableName','Admin2_Household_Goods','XXX','XXX'],
//      ['XtableName','Admin2_Mortality','XXX','XXX'],
//      ['XtableName','Admin2_Population','XXX','XXX'],
//      ['XtableName','Admin2_Poverty','XXX','XXX'],
//      ['XtableName','ADMIN3','XXX','XXX'],
//      ['XtableName','ADMIN4','XXX','XXX'],
//      ['XtableName','ADMIN5','XXX','XXX'],
//      ['XtableName','Agricultural_POI','XXX','XXX'],
//      ['XtableName','Airfields','aeroway','aerodrome'],
//      ['XtableName','Border_Crossings','barrier','border_control'],
//      ['XtableName','Bridges_Tunnels','XXX','XXX'],
//      ['XtableName','Commercial_POI','XXX','XXX'],
//      ['XtableName','Conflict_Points','hgis:conflict_point','yes'],
//      ['XtableName','Crime_Data','hgis:crime_point','yes'],
//      ['XtableName','Cultural_POI','XXX','XXX'],
//      ['XtableName','Dams','waterway','dam'],
     ['XtableName','Educational_Institutions','amenity','school'],
//      ['XtableName','Electrical_POI','XXX','XXX'],
//      ['XtableName','Embassies','XXX','XXX'],
//      ['XtableName','Ethnicity','ethnicity_data','yes'],
//      ['XtableName','Foreign_Investment_Projects','XXX','XXX'],
//      ['XtableName','Free_Trade_Zones','free_trade_zone','yes'],
//      ['XtableName','Free_Trade_Zones_Polygons','free','XXX'],
//      ['XtableName','Geonames','XXX','XXX'],
//      ['XtableName','GNDB','XXX','XXX'],
//      ['XtableName','Government_POI','XXX','XXX'],
//      ['XtableName','HADR','hgis:hdar','yes'],
//      ['XtableName','Health_Events','hgis:health_point','yes'],
//      ['XtableName','Hydrology_POI','XXX','XXX'],
//      ['XtableName','Hydrology_Polygons','XXX','XXX'],
//      ['XtableName','Hydrology_Polylines','XXX','XXX'],
//      ['XtableName','Internet_Cafes','amenity','internet_cafe'],
//      ['XtableName','Languages','language_data','yes'],
//      ['XtableName','Libraries','amenity','library'],
//      ['XtableName','Lodging_POI','XXX','XXX'],
//      ['XtableName','Marine_POI','XXX','XXX'],
//      ['XtableName','Media_Outlets','XXX','XXX'],
//      ['XtableName','Medical_Facilities','XXX','XXX'],
//      ['XtableName','Military_Installations','military','installation'],
//      ['XtableName','Natural_POI','XXX','XXX'],
//      ['XtableName','Natural_Resources','XXX','XXX'],
//      ['XtableName','Ports','landuse','port'],
//      ['XtableName','Power_Plants','power','plant'],
//      ['XtableName','Prisons','amenity','prison'],
//      ['XtableName','Protected_Areas','protected_area','yes'],
//      ['XtableName','Public_Security_POI','XXX','XXX'],
//      ['XtableName','Public_Transportation_POI','XXX','XXX'],
//      ['XtableName','Railways','railway','rail'],
//      ['XtableName','Railways_POI','XXX','XXX'],
//      ['XtableName','Recreation_POI','XXX','XXX'],
//      ['XtableName','Refugee_Camps','XXX','XXX'],
//      ['XtableName','Religion','XXX','XXX'],
     ['XtableName','Religious_Institutions','amenity','place_of_worship'],
//      ['XtableName','Roads','highway','road'],
//      ['XtableName','Smuggling_Routes','smuggling_route','yes'],
//      ['XtableName','Smuggling_Routes_Polyline','XXX','XXX'],
//      ['XtableName','Soils','geological','soil_surface_region'], // Link to TDSv61
//      ['XtableName','Tourist_Locations_POI','XXX','XXX'],
    ], // End layerIn

    layerCommon : [
//      ['XtableName','ADMIN0','XXX','XXX'],
//      ['XtableName','Admin0_Access_To_Services','XXX','XXX'],
//      ['XtableName','Admin0_Education','XXX','XXX'],
//      ['XtableName','Admin0_Employment','XXX','XXX'],
//      ['XtableName','Admin0_Household_Goods','XXX','XXX'],
//      ['XtableName','Admin0_Mortality','XXX','XXX'],
//      ['XtableName','Admin0_Population','XXX','XXX'],
//      ['XtableName','Admin0_Poverty','XXX','XXX'],
//      ['XtableName','ADMIN1','XXX','XXX'],
//      ['XtableName','Admin1_Access_To_Services','XXX','XXX'],
//      ['XtableName','Admin1_Education','XXX','XXX'],
//      ['XtableName','Admin1_Employment','XXX','XXX'],
//      ['XtableName','Admin1_Household_Goods','XXX','XXX'],
//      ['XtableName','Admin1_Mortality','XXX','XXX'],
//      ['XtableName','Admin1_Population','XXX','XXX'],
//      ['XtableName','Admin1_Poverty','XXX','XXX'],
//      ['XtableName','ADMIN2','XXX','XXX'],
//      ['XtableName','Admin2_Access_To_Services','XXX','XXX'],
//      ['XtableName','Admin2_Education','XXX','XXX'],
//      ['XtableName','Admin2_Employment','XXX','XXX'],
//      ['XtableName','Admin2_Household_Goods','XXX','XXX'],
//      ['XtableName','Admin2_Mortality','XXX','XXX'],
//      ['XtableName','Admin2_Population','XXX','XXX'],
//      ['XtableName','Admin2_Poverty','XXX','XXX'],
//      ['XtableName','ADMIN3','XXX','XXX'],
//      ['XtableName','ADMIN4','XXX','XXX'],
//      ['XtableName','ADMIN5','XXX','XXX'],
//      ['XtableName','Agricultural_POI','XXX','XXX'],
     ['XtableName','Airfields','aeroway','aerodrome'],
     ['XtableName','Border_Crossings','barrier','border_control'],
//      ['XtableName','Bridges_Tunnels','XXX','XXX'],
//      ['XtableName','Commercial_POI','XXX','XXX'],
     ['XtableName','Conflict_Points','hgis:conflict_point','yes'],
     ['XtableName','Crime_Data','hgis:crime_point','yes'],
//      ['XtableName','Cultural_POI','XXX','XXX'],
     ['XtableName','Dams','waterway','dam'],
//      ['XtableName','Educational_Institutions','XXX','XXX'],
//      ['XtableName','Electrical_POI','XXX','XXX'],
//      ['XtableName','Embassies','XXX','XXX'],
     ['XtableName','Ethnicity','ethnicity_data','yes'],
//      ['XtableName','Foreign_Investment_Projects','XXX','XXX'],
     ['XtableName','Free_Trade_Zones','free_trade_zone','yes'],
//      ['XtableName','Free_Trade_Zones_Polygons','free','XXX'],
//      ['XtableName','Geonames','XXX','XXX'],
//      ['XtableName','GNDB','XXX','XXX'],
//      ['XtableName','Government_POI','XXX','XXX'],
     ['XtableName','HADR','hgis:hdar','yes'],
     ['XtableName','Health_Events','hgis:health_point','yes'],
//      ['XtableName','Hydrology_POI','XXX','XXX'],
//      ['XtableName','Hydrology_Polygons','XXX','XXX'],
//      ['XtableName','Hydrology_Polylines','XXX','XXX'],
     ['XtableName','Internet_Cafes','amenity','internet_cafe'],
     ['XtableName','Languages','language_data','yes'],
     ['XtableName','Libraries','amenity','library'],
//      ['XtableName','Lodging_POI','XXX','XXX'],
//      ['XtableName','Marine_POI','XXX','XXX'],
//      ['XtableName','Media_Outlets','XXX','XXX'],
//      ['XtableName','Medical_Facilities','XXX','XXX'],
     ['XtableName','Military_Installations','military','installation'],
//      ['XtableName','Natural_POI','XXX','XXX'],
//      ['XtableName','Natural_Resources','XXX','XXX'],
     ['XtableName','Ports','landuse','port'],
     ['XtableName','Power_Plants','power','plant'],
     ['XtableName','Prisons','amenity','prison'],
     ['XtableName','Protected_Areas','protected_area','yes'],
//      ['XtableName','Public_Security_POI','XXX','XXX'],
//      ['XtableName','Public_Transportation_POI','XXX','XXX'],
     ['XtableName','Railways','railway','rail'],
//      ['XtableName','Railways_POI','XXX','XXX'],
//      ['XtableName','Recreation_POI','XXX','XXX'],
     ['XtableName','Refugee_Camps','refugee','yes'],
//      ['XtableName','Religion','XXX','XXX'],
//      ['XtableName','Religious_Institutions','XXX','XXX'],
     ['XtableName','Roads','highway','road'],
     ['XtableName','Smuggling_Routes','smuggling_route','yes'],
//      ['XtableName','Smuggling_Routes_Polyline','XXX','XXX'],
     ['XtableName','Soils','geological','soil_surface_region'], // Link to TDSv61
//      ['XtableName','Tourist_Locations_POI','XXX','XXX'],
    ], // End layerCommon

    layerOut : [
//      ['XtableName','ADMIN0','XXX','XXX'],
//      ['XtableName','Admin0_Access_To_Services','XXX','XXX'],
//      ['XtableName','Admin0_Education','XXX','XXX'],
//      ['XtableName','Admin0_Employment','XXX','XXX'],
//      ['XtableName','Admin0_Household_Goods','XXX','XXX'],
//      ['XtableName','Admin0_Mortality','XXX','XXX'],
//      ['XtableName','Admin0_Population','XXX','XXX'],
//      ['XtableName','Admin0_Poverty','XXX','XXX'],
//      ['XtableName','ADMIN1','XXX','XXX'],
//      ['XtableName','Admin1_Access_To_Services','XXX','XXX'],
//      ['XtableName','Admin1_Education','XXX','XXX'],
//      ['XtableName','Admin1_Employment','XXX','XXX'],
//      ['XtableName','Admin1_Household_Goods','XXX','XXX'],
//      ['XtableName','Admin1_Mortality','XXX','XXX'],
//      ['XtableName','Admin1_Population','XXX','XXX'],
//      ['XtableName','Admin1_Poverty','XXX','XXX'],
//      ['XtableName','ADMIN2','XXX','XXX'],
//      ['XtableName','Admin2_Access_To_Services','XXX','XXX'],
//      ['XtableName','Admin2_Education','XXX','XXX'],
//      ['XtableName','Admin2_Employment','XXX','XXX'],
//      ['XtableName','Admin2_Household_Goods','XXX','XXX'],
//      ['XtableName','Admin2_Mortality','XXX','XXX'],
//      ['XtableName','Admin2_Population','XXX','XXX'],
//      ['XtableName','Admin2_Poverty','XXX','XXX'],
//      ['XtableName','ADMIN3','XXX','XXX'],
//      ['XtableName','ADMIN4','XXX','XXX'],
//      ['XtableName','ADMIN5','XXX','XXX'],
//      ['XtableName','Agricultural_POI','XXX','XXX'],
//      ['XtableName','Airfields','aeroway','aerodrome'],
//      ['XtableName','Border_Crossings','barrier','border_control'],
     ['XtableName','Bridges_Tunnels','bridge','yes'],
     ['XtableName','Bridges_Tunnels','tunnel','yes'],
//      ['XtableName','Commercial_POI','XXX','XXX'],
//      ['XtableName','Conflict_Points','XXX','XXX'],
//      ['XtableName','Crime_Data','XXX','XXX'],
//      ['XtableName','Cultural_POI','XXX','XXX'],
//      ['XtableName','Dams','waterway','dam'],
     ['XtableName','Educational_Institutions','amenity','school'],
//      ['XtableName','Electrical_POI','XXX','XXX'],
//      ['XtableName','Embassies','XXX','XXX'],
//      ['XtableName','Ethnicity','XXX','XXX'],
//      ['XtableName','Foreign_Investment_Projects','XXX','XXX'],
//      ['XtableName','Free_Trade_Zones','XXX','XXX'],
//      ['XtableName','Free_Trade_Zones_Polygons','XXX','XXX'],
//      ['XtableName','Geonames','XXX','XXX'],
//      ['XtableName','GNDB','XXX','XXX'],
//      ['XtableName','Government_POI','XXX','XXX'],
//      ['XtableName','HADR','XXX','XXX'],
//      ['XtableName','Health_Events','XXX','XXX'],
//      ['XtableName','Hydrology_POI','XXX','XXX'],
//      ['XtableName','Hydrology_Polygons','XXX','XXX'],
//      ['XtableName','Hydrology_Polylines','XXX','XXX'],
//      ['XtableName','Internet_Cafes','amenity','internet_cafe'],
//      ['XtableName','Languages','XXX','XXX'],
//      ['XtableName','Libraries','amenity','library'],
//      ['XtableName','Lodging_POI','XXX','XXX'],
//      ['XtableName','Marine_POI','XXX','XXX'],
//      ['XtableName','Media_Outlets','XXX','XXX'],
//      ['XtableName','Medical_Facilities','XXX','XXX'],
//      ['XtableName','Military_Installations','military','installation'],
//      ['XtableName','Natural_POI','XXX','XXX'],
//      ['XtableName','Natural_Resources','XXX','XXX'],
//      ['XtableName','Ports','landuse','port'],
//      ['XtableName','Power_Plants','power','plant'],
//      ['XtableName','Prisons','amenity','prison'],
//      ['XtableName','Protected_Areas','XXX','XXX'],
//      ['XtableName','Public_Security_POI','XXX','XXX'],
//      ['XtableName','Public_Transportation_POI','XXX','XXX'],
//      ['XtableName','Railways','XXX','XXX'],
//      ['XtableName','Railways_POI','XXX','XXX'],
//      ['XtableName','Recreation_POI','XXX','XXX'],
//      ['XtableName','Refugee_Camps','XXX','XXX'],
//      ['XtableName','Religion','XXX','XXX'],
     ['XtableName','Religious_Institutions','amenity','place_of_worship'],
//      ['XtableName','Roads','XXX','XXX'],
//      ['XtableName','Smuggling_Routes','XXX','XXX'],
//      ['XtableName','Smuggling_Routes_Polyline','XXX','XXX'],
//      ['XtableName','Soils','XXX','XXX'],
//      ['XtableName','Tourist_Locations_POI','XXX','XXX'],
    ], // End layerOut

    // ##### Start of One2One Rules #####

    // One2one rules for Text Fields
    txtBiased : {
     'ACTOR':'raw:ACTOR',
     'ACTOR1':'raw:ACTOR1',
     'ACTOR2':'raw:ACTOR2',
     'ADDRESS':'addr:full', // Address
     'ADM0_NAME':'is_in:country',
     'ADM1_NAME':'admin_level1:name', // Could be a state, county etc
     'ADM2_NAME':'admin_level2:name',
     'ADM3_NAME':'admin_level3:name',
     'ADM4_NAME':'admin_level4:name',
     'ADM5_NAME':'admin_level5:name',
     'ALL_COM':'raw:ALL_COM',
     'ALT_NAME':'alt_name', // Geographic Name Information : Full Name
     'ALT_NAMES':'raw:ALT_NAMES',
     'ANCH_DEPTH':'raw:ANCH_DEPTH',
     'APP_DATE':'raw:APP_DATE',
     'AREA_AFF':'raw:AREA_AFF',
     'CAPACITY':'raw:CAPACITY',
     'CARBCHMOOR':'raw:CARBCHMOOR',
     'CARGMDMOOR':'raw:CARGMDMOOR',
     'CARGO_ANCH':'raw:CARGO_ANCH',
     'CARGODEPTH':'raw:CARGODEPTH',
     'CARGOWHARF':'raw:CARGOWHARF',
     'CARICEMOOR':'raw:CARICEMOOR',
     'CHAN_DEPTH':'raw:CHAN_DEPTH',
     'CITY':'is_in:city', // City Name
     'COMM_AIR':'raw:COMM_AIR',
     'COMMENTS':'note', // Note : Memorandum
     'COMM_FAX':'raw:COMM_FAX',
     'COMM_PHONE':'raw:COMM_PHONE',
     'COMM_RADIO':'raw:COMM_RADIO',
     'COMM_RAIL':'raw:COMM_RAIL',
     'COMM_VHF':'raw:COMM_VHF',
     'COUNTRY':'crossing_to_country',
     'CRANEFIXED':'raw:CRANEFIXED',
     'CRANEFLOAT':'raw:CRANEFLOAT',
     'CRANEMOBIL':'raw:CRANEMOBIL',
     'DATE':'raw:DATE',
     'DECKSUPPLY':'raw:DECKSUPPLY',
     'DEGAUSS':'raw:DEGAUSS',
     'DESCRIP':'raw:DESCRIP',
     'DESIG':'raw:DESIG',
     'DESIG_TYPE':'raw:DESIG_TYPE',
     'DIESEL':'raw:DIESEL',
     'DOMSOI':'raw:DOMSOI',
     'DRTYBALLST':'raw:DRTYBALLST',
     'DRYDOCK':'raw:DRYDOCK',
     'ELECREPAIR':'raw:ELECREPAIR',
     'ELECTRICAL':'raw:ELECTRICAL',
     'END_DT':'date:end', // Number of Generators
     'ENG_SUPPLY':'raw:ENG_SUPPLY',
     'ENGTYPE0':'raw:ENGTYPE0',
     'ENGTYPE1':'raw:ENGTYPE1',
     'ENGTYPE2':'raw:ENGTYPE2',
     'ENGTYPE3':'raw:ENGTYPE3',
     'ENGTYPE4':'raw:ENGTYPE4',
     'ENGTYPE5':'raw:ENGTYPE5',
     'ENTRY_ICE':'raw:ENTRY_ICE',
     'ENTRYOTHER':'raw:ENTRYOTHER',
     'ENTRYSWELL':'raw:ENTRYSWELL',
     'ENTRY_TIDE':'raw:ENTRY_TIDE',
     'ETAMESSAGE':'raw:ETAMESSAGE',
     'FAOSOIL':'raw:FAOSOIL',
     'FATALITY':'fatalities', // Number of fatalities
     'FI_STATUS':'raw:FI_STATUS',
     'FUEL_OIL':'raw:FUEL_OIL',
     'FULL_NAME':'raw:FULL_NAME',
     'GARBAGE':'raw:GARBAGE',
     'GOV_TYPE':'raw:GOV_TYPE',
     'HARBORSIZE':'raw:HARBORSIZE',
     'HARBORTYPE':'raw:HARBORTYPE',
     'HEIGHT':'raw:HEIGHT',
     'HOLDGROUND':'raw:HOLDGROUND',
     'IATA':'raw:IATA',
     'ICAO':'raw:ICAO',
     'IUCN_CAT':'raw:IUCN_CAT',
     'LANG_FAM':'language_family',
     'LANG_SUBGR':'language_subgroup',
     'LANGUAGE':'language',
     'LEND_INSTR':'raw:LEND_INSTR',
     'LIFT_0_24':'raw:LIFT_0_24',
     'LIFT_100_O':'raw:LIFT_100_O',
     'LIFT_25_49':'raw:LIFT_25_49',
     'LIFT50_100':'raw:LIFT50_100',
     'LOC_ASSIST':'raw:LOC_ASSIST',
     'LOCATION':'raw:LOCATION',
     'LONGSHORE':'raw:LONGSHORE',
     'MAJ_NAME':'raw:MAJ_NAME',
     'MANAG_AUTH':'raw:MANAG_AUTH',
     'MAX_VESSEL':'raw:MAX_VESSEL',
     'MED_FACIL':'raw:MED_FACIL',
     'MIL_TYPE':'raw:MIL_TYPE',
     'MISCLU1':'raw:MISCLU1',
     'MODIFY_DAT':'raw:MODIFY_DAT',
     'MODIFY_DT':'raw:MODIFY_DT',
     'NAME':'name', // Geographic Name Information : Full Name
     'NAME_FAO':'raw:NAME_FAO',
     'NAME_ISO':'raw:NAME_ISO',
     'NAME_LOCAL':'raw:NAME_LOCAL',
     'NAME_VARIA':'raw:NAME_VARIA',
     'NAV_EQUIP':'raw:NAV_EQUIP',
     'NT':'raw:NT',
     'NUM_GEN':'generator:number', // Number of Generators
     'OIL_DEPTH':'raw:OIL_DEPTH',
     'ORG_SOURCE':'raw:ORG_SOURCE',
     'OVERHD_LIM':'raw:OVERHD_LIM',
     'PEOPLEGP_1':'raw:PEOPLEGP_1', // Supposed to be coded values
     'PEOPLEGP_2':'raw:PEOPLEGP_2',
     'PEOPLEGP_3':'raw:PEOPLEGP_3',
     'PEOPLEGP_4':'raw:PEOPLEGP_4',
     'PEOPLEGP_5':'raw:PEOPLEGP_5',
     'PILOTADVSD':'raw:PILOTADVSD',
     'PILOTAVAIL':'raw:PILOTAVAIL',
     'PILOT_REQD':'raw:PILOT_REQD',
     'PORT_NAME':'raw:PORT_NAME',
     'PORTOFENTR':'raw:PORTOFENTR',
     'PRATIQUE':'raw:PRATIQUE',
     'PROVISIONS':'raw:PROVISIONS',
     'QUAR_OTHER':'raw:QUAR_OTHER',
     'RAILWAY':'raw:RAILWAY',
     'REPAIRCODE':'raw:REPAIRCODE',
     'RIVER':'raw:RIVER',
     'ROUTES':'raw:ROUTES',
     'SECTOR':'raw:SECTOR',
     'SERV_STEAM':'raw:SERV_STEAM',
     'SHELTER':'raw:SHELTER',
     'SORT_NAME':'raw:SORT_NAME',
     'SOURCE':'source', // Source Information : Source Description
     'SOURCE2':'source:2', // Source Information : Source Description
     'SOURCE_DT':'source:datetime', // Source Information : Source Date and Time
     'SOURCE2_DT':'source:datetime:2', // Source Information : Source Date and Time
     'SSCC_CERT':'raw:SSCC_CERT',
     'START_DT':'date:start', // Number of Generators
     'SUB_NAME':'raw:SUB_NAME',
     'TELEPHONE':'raw:TELEPHONE',
     'TL_AFFECT':'total_affected', // Total Lives Affected???
     'TOT_CAP_MW':'generator:output:electricity', // Generator Output
     'TUG_ASSIST':'raw:TUG_ASSIST',
     'TUGSALVAGE':'raw:TUGSALVAGE',
     'TURN_BASIN':'raw:TURN_BASIN',
     'TYPE3':'raw:TYPE3',
     'TYPE4':'raw:TYPE4',
     'TYPE5':'raw:TYPE5',
     'UNIT':'raw:UNIT',
     'USE':'raw:USE',
     'US_REP':'raw:US_REP',
     'VALIDFR':'raw:VALIDFR',
     'WATER':'raw:WATER',
     'WEBSITE':'raw:WEBSITE',
     'YR_OPER':'raw:YR_OPER',
    }, // End txtBiased

    // One2one ruled for Number fields
    numBiased : {
     'ACC_ELEC':'raw:ACC_ELEC',
     'ACC_H2O':'raw:ACC_H2O',
     'ACC_INT':'raw:ACC_INT',
     'ACC_PHOL':'raw:ACC_PHOL',
     'ACC_PHOM':'raw:ACC_PHOM',
     'ACC_RAD':'raw:ACC_RAD',
     'ACC_SEW':'raw:ACC_SEW',
     'ACC_TV':'raw:ACC_TV',
     'AGE_15_65':'raw:AGE_15_65',
     'AGE_65OVR':'raw:AGE_65OVR',
     'AGE_UNDR15':'raw:AGE_UNDR15',
     'AGR_SEC':'raw:AGR_SEC',
     'APP_YEAR':'raw:APP_YEAR',
     'ASSETS':'raw:ASSETS',
     'CBR':'raw:CBR',
     'CDR':'raw:CDR',
     'CONFLICT':'raw:CONFLICT',
     'CORRUPT':'raw:CORRUPT',
     'DGMDPI':'raw:DGMDPI',
     'ECO_ACT_F':'raw:ECO_ACT_F',
     'ECO_ACT_M':'raw:ECO_ACT_M',
     'ECO_ACT_T':'raw:ECO_ACT_T',
     'EDU_FAC':'raw:EDU_FAC',
     'ELECTRIC':'raw:ELECTRIC',
     'EST_PRIS':'prison:num_prisoners', // Number of prisoners
     'FATALITY':'raw:FATALITY',
     'GINI':'raw:GINI',
     'HEALTH_FAC':'raw:HEALTH_FAC',
     'HH_AST':'raw:HH_AST',
     'HIV':'raw:HIV',
     'HOUSEHOLDS':'raw:HOUSEHOLDS',
     'HR':'raw:HR',
     'HUMSEC_FAC':'raw:HUMSEC_FAC',
     'IMR':'raw:IMR',
     'LF_EXP':'raw:LF_EXP',
     'LFPR':'raw:LFPR',
     'LIT_RATE':'raw:LIT_RATE',
     'LIT_RT_F':'raw:LIT_RT_F',
     'LIT_RT_M':'raw:LIT_RT_M',
     'LIT_RT_T':'raw:LIT_RT_T',
     'MAN_SEC':'raw:MAN_SEC',
     'MAT_FAC':'raw:MAT_FAC',
     'MAT_MR':'raw:MAT_MR',
     'NAT_FAC':'raw:NAT_FAC',
     'NO_TK_AREA':'raw:NO_TK_AREA',
     'N_RUNWAYS':'raw:N_RUNWAYS',
     'NUM_DTH':'raw:NUM_DTH',
     'NUM_INJ':'raw:NUM_INJ',
     'PER_POP_F':'raw:PER_POP_F',
     'PER_POP_M':'raw:PER_POP_M',
     'PER_RUL':'raw:PER_RUL',
     'PER_URB':'raw:PER_URB',
     'POP_DEN':'raw:POP_DEN',
     'POP_T':'raw:POP_T',
     'POPULATION':'raw:POPULATION',
     'PREV_DIS':'raw:PREV_DIS',
     'PRI_COMPL':'raw:PRI_COMPL',
     'PRI_ENROL':'raw:PRI_ENROL',
     'PRIM_ED':'raw:PRIM_ED',
     'PUB_SEC':'raw:PUB_SEC',
     'REP_AREA':'raw:REP_AREA',
     'REP_M':'raw:REP_M',
     'RES_SEC':'raw:RES_SEC',
     'R_LENGTH':'raw:R_LENGTH',
     'R_WIDTH':'raw:R_WIDTH',
     'SEC_COMPL':'raw:SEC_COMPL',
     'SEC_ENROL':'raw:SEC_ENROL',
     'SEV_SEC':'raw:SEV_SEC',
     'SHAPE_Leng':'raw:SHAPE_Leng',
     'STATUS_YR':'raw:STATUS_YR',
     'STRAHLER':'raw:STRAHLER',
     'TER_COMPL':'raw:TER_COMPL',
     'TER_ENROL':'raw:TER_ENROL',
     'TERROR':'raw:TERROR',
     'TERT_ED':'raw:TERT_ED',
     'TFR':'raw:TFR',
     'TIDE_RANGE':'raw:TIDE_RANGE',
     'TL_AFFECT':'raw:TL_AFFECT',
     'TL_AFFECT':'raw:TL_AFFECT',
     'TOT_BOYS':'raw:TOT_BOYS',
     'TOT_CLASS':'raw:TOT_CLASS',
     'TOT_F_TEAC':'raw:TOT_F_TEAC',
     'TOT_GIRLS':'raw:TOT_GIRLS',
     'TOT_M_TEAC':'raw:TOT_M_TEAC',
     'U5_MR':'raw:U5_MR',
     'UE':'raw:UE',
     'UN5_MR':'raw:UN5_MR',
     'UNEDUCATED':'raw:UNEDUCATED',
     'UNEMP_F':'raw:UNEMP_F',
     'UNEMP_M':'raw:UNEMP_M',
     'UNEMP_T':'raw:UNEMP_T',
     'VALUE':'raw:VALUE',
     'WATER':'raw:WATER',
     'YEAR':'raw:YEAR',
    }, // End numBiased
    

    // Common one2one rules. Used for both import and export
    // taken from the HGISv20 spec.
    one2one : [
     // COM_TYPE - Commodity Type
     ['COM_TYPE','Both','commodity_type','Both'],
     ['COM_TYPE','Metallic','commodity_type','Metallic'],
     ['COM_TYPE','Non-Metallic','commodity_type','Non-Metallic'],

     // CONF_IMAGE - Confirmed with Imagery
     ['CONF_IMAGE','assessed','hgis:imagery_confirmed','assessed'],
     ['CONF_IMAGE','confirmed','hgis:imagery_confirmed','confirmed'],
     ['CONF_IMAGE','reported','hgis:imagery_confirmed','reported'],
     ['CONF_IMAGE','unconfirmed','hgis:imagery_confirmed','unconfirmed'],

     // CUSTOMS - At Airport
     ['CUSTOMS','Yes','hgis:customs','yes'], // Fix in custom rules
     ['CUSTOMS','No','hgis:customs','no'],

     // DEV_STAT - Natural Resources
     ['DEV_STAT','Occurrence','development_status','Occurrence'],
     ['DEV_STAT','Past Producer','development_status','Past Producer'],
     ['DEV_STAT','Plant','development_status','Plant'],
     ['DEV_STAT','Producer','development_status','Producer'],
     ['DEV_STAT','Prospect','development_status','Prospect'],

     // DISEASE -
     ['DISEASE','acute jaundice syndrome','disease','acute_jaundice_syndrome'],
     ['DISEASE','acute neurological syndrome','disease','acute_neurological_syndrome'],
     ['DISEASE','acute respiratory syndrome','disease','acute_respiratory_syndrome'],
     ['DISEASE','acute watery diarrhoeal syndrome','disease','acute_watery_diarrhoeal_syndrome'],
     ['DISEASE','bubonic plague','disease','bubonic_plague'],
     ['DISEASE','cerebro spinal','disease','cerebro_spinal'],
     ['DISEASE','chikungunya','disease','chikungunya'],
     ['DISEASE','cholera','disease','cholera'],
     ['DISEASE','cutaneous leishmaniasis','disease','cutaneous_leishmaniasis'],
     ['DISEASE','dengue','disease','dengue'],
     ['DISEASE','ebola','disease','ebola'],
     ['DISEASE','equine encephalitis','disease','equine_encephalitis'],
     ['DISEASE','flu','disease','flu'],
     ['DISEASE','hantavirus','disease','hantavirus'],
     ['DISEASE','lassa fever','disease','lassa_fever'],
     ['DISEASE','leptospirosis','disease','leptospirosis'],
     ['DISEASE','malaria','disease','malaria'],
     ['DISEASE','measles','disease','measles'],
     ['DISEASE','meningitis','disease','meningitis'],
     ['DISEASE','meningococcal disease','disease','meningococcal'],
     ['DISEASE','neonatal tetanus','disease','neonatal_tetanus'],
     ['DISEASE','parasitic infectious disease','disease','parasitic_infectious_disease'],
     ['DISEASE','pertussis','disease','pertussis'],
     ['DISEASE','polio','disease','polio'],
     ['DISEASE','poliomyelitis','disease','poliomyelitis'],
     ['DISEASE','rabies','disease','rabies'],
     ['DISEASE','rift valley fever','disease','rift_valley_fever'],
     ['DISEASE','total tetanus','disease','total tetanus'],
     ['DISEASE','tuberculosis','disease','tuberculosis'],
     ['DISEASE','yellow fever','disease','yellow_fever'],

     // DSG - From Geonames & Geonames translation
//      ['DSG','ADM1','poi','first-order_administrative_division'],
//      ['DSG','ADM2','poi','second-order_administrative_division'],
//      ['DSG','PPL','place','populated'], // Populated Place
//      ['DSG','PPLA','poi','seat_of_a_first-order_administrative_division'],
//      ['DSG','PPLA2','poi','seat_of_a_second-order_administrative_division'],
//      ['DSG','PPLC','capital','yes'], // Capital of a political entity
//      ['DSG','PPLL','place','hamlet'], // Populated Locality
//      ['DSG','PPLW','distroyed:place','populated'], // Destroyed populated place
//      ['DSG','PPLX','place','neighbourhood'], // Section of a populated place

     // EVENT_TYPE - Conflict Points
     ['EVENT_TYPE','armed assault','conflict_event','armed_assault'],
     ['EVENT_TYPE','arson','conflict_event','arson'],
     ['EVENT_TYPE','assassination','conflict_event','assassination'],
     ['EVENT_TYPE','battle - government regains territory','conflict_event','battle - government regains territory'],
     ['EVENT_TYPE','battle - no change of territory','conflict_event','battle - no change of territory'],
     ['EVENT_TYPE','battle - rebels overtake territory','conflict_event','battle - rebels overtake territory'],
     ['EVENT_TYPE','bombing/explosion','conflict_event','bombing/explosion'],
     ['EVENT_TYPE','communication','conflict_event','communication'],
     ['EVENT_TYPE','facility/infrastructure attack','conflict_event','facility/infrastructure attack'],
     ['EVENT_TYPE','financing','conflict_event','financing'],
     ['EVENT_TYPE','headquarters or base established','conflict_event','headquarters or base established'],
     ['EVENT_TYPE','hijacking','conflict_event','hijacking'],
     ['EVENT_TYPE','hostage taking (barricade incident)','conflict_event','hostage taking (barricade incident)'],
     ['EVENT_TYPE','hostage taking (kidnapping)','conflict_event','hostage taking (kidnapping)'],
     ['EVENT_TYPE','military operations','conflict_event','military operations'],
     ['EVENT_TYPE','non-violent activity by a conflict actor','conflict_event','non-violent activity by a conflict actor'],
     ['EVENT_TYPE','non-violent transfer of territory','conflict_event','non-violent transfer of territory'],
     ['EVENT_TYPE','police operations','conflict_event','police operations'],
     ['EVENT_TYPE','riots/protests','conflict_event','riots/protests'],
     ['EVENT_TYPE','robbery','conflict_event','robbery'],
     ['EVENT_TYPE','territorial incursion','conflict_event','territorial incursion'],
     ['EVENT_TYPE','torture','conflict_event','torture'],
     ['EVENT_TYPE','trafficking','conflict_event','trafficking'],
     ['EVENT_TYPE','unarmed assault','conflict_event','unarmed assault'],
     ['EVENT_TYPE','vandalism','conflict_event','vandalism'],
     ['EVENT_TYPE','violence against civilians','conflict_event','violence against civilians'],

     // FC - From Geonames
     ['FC','A','geonames:feature_class','a'], // Country, state, region
     ['FC','H','geonames:feature_class','h'], // stream, lake
     ['FC','L','geonames:feature_class','l'], // parks, area
     ['FC','P','geonames:feature_class','p'], // City, village
     ['FC','R','geonames:feature_class','r'], // Road, railway
     ['FC','S','geonames:feature_class','s'], // spot, building, farm
     ['FC','T','geonames:feature_class','t'], // mountain, hill, rock
     ['FC','U','geonames:feature_class','u'], // Undersea
     ['FC','V','geonames:feature_class','v'], // forest, heath

     // HYDRO_DESC - Hydro Description Type
     ['HYDRO_DESC','Perennial/Permanent','intermittent','no'],
     ['HYDRO_DESC','Non-Perennial/Intermittent/Fluctuating','intermittent','yes'],

     // Taken from TDSv61: ISO3 - (Location Country) Designation : GENC Short URN-based Identifier
     // ['ISO3','other','is_in:country_code','other'], // Other
     ['ISO3','ABW','is_in:country_code','AW'], // Aruba
     ['ISO3','AFG','is_in:country_code','AF'], // Islamic Republic of Afghanistan
     ['ISO3','AGO','is_in:country_code','AO'], // RepublicFstate of Angola
     ['ISO3','AIA','is_in:country_code','AI'], // Anguilla
     ['ISO3','ALB','is_in:country_code','AL'], // Republic of Albania
     ['ISO3','AND','is_in:country_code','AD'], // Principality of Andorra
     ['ISO3','ARE','is_in:country_code','AE'], // United Arab Emirates
     ['ISO3','ARG','is_in:country_code','AR'], // Argentine Republic
     ['ISO3','ARM','is_in:country_code','AM'], // Republic of Armenia
     ['ISO3','ASM','is_in:country_code','AS'], // Territory of American Samoa
     ['ISO3','ATA','is_in:country_code','AQ'], // Antarctica
     ['ISO3','ATF','is_in:country_code','TF'], // French Southern and Antarctic Lands
     ['ISO3','ATG','is_in:country_code','AG'], // Antigua and Barbuda
     ['ISO3','AUS','is_in:country_code','AU'], // Commonwealth of Australia
     ['ISO3','AUT','is_in:country_code','AT'], // Republic of Austria
     ['ISO3','AX1','is_in:country_code','A1'], // Unknown
     ['ISO3','AX2','is_in:country_code','A2'], // Guantanamo Bay Naval Base
     ['ISO3','AZE','is_in:country_code','AZ'], // Republic of Azerbaijan
     ['ISO3','BDI','is_in:country_code','BI'], // Republic of Burundi
     ['ISO3','BEL','is_in:country_code','BE'], // Kingdom of Belgium
     ['ISO3','BEN','is_in:country_code','BJ'], // Republic of Benin
     ['ISO3','BES','is_in:country_code','BQ'], // Bonaire, Sint Eustatius, and Saba
     ['ISO3','BFA','is_in:country_code','BF'], // Burkina Faso
     ['ISO3','BGD','is_in:country_code','BD'], // Peoples Republic of Bangladesh
     ['ISO3','BGR','is_in:country_code','BG'], // Republic of Bulgaria
     ['ISO3','BHR','is_in:country_code','BH'], // Kingdom of Bahrain
     ['ISO3','BHS','is_in:country_code','BS'], // Commonwealth of The Bahamas
     ['ISO3','BIH','is_in:country_code','BA'], // Bosnia and Herzegovina
     ['ISO3','BLM','is_in:country_code','BL'], // Saint Barthelemy
     ['ISO3','BLR','is_in:country_code','BY'], // Republic of Belarus
     ['ISO3','BLZ','is_in:country_code','BZ'], // Belize
     ['ISO3','BMU','is_in:country_code','BM'], // Bermuda
     ['ISO3','BOL','is_in:country_code','BO'], // Plurinational State of Bolivia
     ['ISO3','BRA','is_in:country_code','BR'], // Federative Republic of Brazil
     ['ISO3','BRB','is_in:country_code','BB'], // Barbados
     ['ISO3','BRN','is_in:country_code','BN'], // Brunei Darussalam
     ['ISO3','BTN','is_in:country_code','BT'], // Kingdom of Bhutan
     ['ISO3','BVT','is_in:country_code','BV'], // Bouvet Island
     ['ISO3','BWA','is_in:country_code','BW'], // Republic of Botswana
     ['ISO3','CAF','is_in:country_code','CF'], // Central African Republic
     ['ISO3','CAN','is_in:country_code','CA'], // Canada
     ['ISO3','CCK','is_in:country_code','CC'], // Territory of Cocos (Keeling) Islands
     ['ISO3','CHE','is_in:country_code','CH'], // Swiss Confederation
     ['ISO3','CHL','is_in:country_code','CL'], // Republic of Chile
     ['ISO3','CHN','is_in:country_code','CN'], // Peoples Republic of China
     ['ISO3','CIV','is_in:country_code','CI'], // Republic of Côte dIvoire
     ['ISO3','CMR','is_in:country_code','CM'], // Republic of Cameroon
     ['ISO3','COD','is_in:country_code','CD'], // Democratic Republic of the Congo
     ['ISO3','COG','is_in:country_code','CG'], // Republic of the Congo
     ['ISO3','COK','is_in:country_code','CK'], // Cook Islands
     ['ISO3','COL','is_in:country_code','CO'], // Republic of Colombia
     ['ISO3','COM','is_in:country_code','KM'], // Union of the Comoros
     ['ISO3','CPT','is_in:country_code','CP'], // Clipperton Island
     ['ISO3','CPV','is_in:country_code','CV'], // Republic of Cape Verde
     ['ISO3','CRI','is_in:country_code','CR'], // Republic of Costa Rica
     ['ISO3','CUB','is_in:country_code','CU'], // Republic of Cuba
     ['ISO3','CUW','is_in:country_code','CW'], // Curaçao
     ['ISO3','CXR','is_in:country_code','CX'], // Territory of Christmas Island
     ['ISO3','CYM','is_in:country_code','KY'], // Cayman Islands
     ['ISO3','CYP','is_in:country_code','CY'], // Republic of Cyprus
     ['ISO3','CZE','is_in:country_code','CZ'], // Czech Republic
     ['ISO3','DEU','is_in:country_code','DE'], // Federal Republic of Germany
     ['ISO3','DGA','is_in:country_code','DG'], // Diego Garcia
     ['ISO3','DJI','is_in:country_code','DJ'], // Republic of Djibouti
     ['ISO3','DMA','is_in:country_code','DM'], // Commonwealth of Dominica
     ['ISO3','DNK','is_in:country_code','DK'], // Kingdom of Denmark
     ['ISO3','DOM','is_in:country_code','DO'], // Dominican Republic
     ['ISO3','DZA','is_in:country_code','DZ'], // Peoples Democratic Republic of Algeria
     ['ISO3','ECU','is_in:country_code','EC'], // Republic of Ecuador
     ['ISO3','EGY','is_in:country_code','EG'], // Arab Republic of Egypt
     ['ISO3','ERI','is_in:country_code','ER'], // State of Eritrea
     ['ISO3','ESH','is_in:country_code','EH'], // Western Sahara
     ['ISO3','ESP','is_in:country_code','ES'], // Kingdom of Spain
     ['ISO3','EST','is_in:country_code','EE'], // Republic of Estonia
     ['ISO3','ETH','is_in:country_code','ET'], // Federal Democratic Republic of Ethiopia
     ['ISO3','FIN','is_in:country_code','FI'], // Republic of Finland
     ['ISO3','FJI','is_in:country_code','FJ'], // Republic of Fiji
     ['ISO3','FLK','is_in:country_code','FK'], // Falkland Islands (Islas Malvinas)
     ['ISO3','FRA','is_in:country_code','FR'], // French Republic
     ['ISO3','FRO','is_in:country_code','FO'], // Faroe Islands
     ['ISO3','FSM','is_in:country_code','FM'], // Federated States of Micronesia
     ['ISO3','GAB','is_in:country_code','GA'], // Gabonese Republic
     ['ISO3','GBR','is_in:country_code','GB'], // United Kingdom of Great Britain and Northern Ireland
     ['ISO3','GEO','is_in:country_code','GE'], // Georgia
     ['ISO3','GGY','is_in:country_code','GG'], // Bailiwick of Guernsey
     ['ISO3','GHA','is_in:country_code','GH'], // Republic of Ghana
     ['ISO3','GIB','is_in:country_code','GI'], // Gibraltar
     ['ISO3','GIN','is_in:country_code','GN'], // Republic of Guinea
     ['ISO3','GLP','is_in:country_code','GP'], // Department of Guadeloupe
     ['ISO3','GMB','is_in:country_code','GM'], // Republic of The Gambia
     ['ISO3','GNB','is_in:country_code','GW'], // Republic of Guinea-Bissau
     ['ISO3','GNQ','is_in:country_code','GQ'], // Republic of Equatorial Guinea
     ['ISO3','GRC','is_in:country_code','GR'], // Hellenic Republic
     ['ISO3','GRD','is_in:country_code','GD'], // Grenada
     ['ISO3','GRL','is_in:country_code','GL'], // Greenland
     ['ISO3','GTM','is_in:country_code','GT'], // Republic of Guatemala
     ['ISO3','GUF','is_in:country_code','GF'], // Department of Guiana
     ['ISO3','GUM','is_in:country_code','GU'], // Territory of Guam
     ['ISO3','GUY','is_in:country_code','GY'], // Co-operative Republic of Guyana
     ['ISO3','HKG','is_in:country_code','HK'], // Hong Kong Special Administrative Region
     ['ISO3','HMD','is_in:country_code','HM'], // Territory of Heard Island and McDonald Islands
     ['ISO3','HND','is_in:country_code','HN'], // Republic of Honduras
     ['ISO3','HRV','is_in:country_code','HR'], // Republic of Croatia
     ['ISO3','HTI','is_in:country_code','HT'], // Republic of Haiti
     ['ISO3','HUN','is_in:country_code','HU'], // Hungary
     ['ISO3','IDN','is_in:country_code','ID'], // Republic of Indonesia
     ['ISO3','IMN','is_in:country_code','IM'], // Isle of Man
     ['ISO3','IND','is_in:country_code','IN'], // Republic of India
     ['ISO3','IOT','is_in:country_code','IO'], // British Indian Ocean Territory
     ['ISO3','IRL','is_in:country_code','IE'], // Ireland
     ['ISO3','IRN','is_in:country_code','IR'], // Islamic Republic of Iran
     ['ISO3','IRQ','is_in:country_code','IQ'], // Republic of Iraq
     ['ISO3','ISL','is_in:country_code','IS'], // Republic of Iceland
     ['ISO3','ISR','is_in:country_code','IL'], // State of Israel
     ['ISO3','ITA','is_in:country_code','IT'], // Italian Republic
     ['ISO3','JAM','is_in:country_code','JM'], // Jamaica
     ['ISO3','JEY','is_in:country_code','JE'], // Bailiwick of Jersey
     ['ISO3','JOR','is_in:country_code','JO'], // Hashemite Kingdom of Jordan
     ['ISO3','JPN','is_in:country_code','JP'], // Japan
     ['ISO3','KAZ','is_in:country_code','KZ'], // Republic of Kazakhstan
     ['ISO3','KEN','is_in:country_code','KE'], // Republic of Kenya
     ['ISO3','KGZ','is_in:country_code','KG'], // Kyrgyz Republic
     ['ISO3','KHM','is_in:country_code','KH'], // Kingdom of Cambodia
     ['ISO3','KIR','is_in:country_code','KI'], // Republic of Kiribati
     ['ISO3','KNA','is_in:country_code','KN'], // Federation of Saint Kitts and Nevis
     ['ISO3','KOR','is_in:country_code','KR'], // Republic of Korea
     ['ISO3','KWT','is_in:country_code','KW'], // State of Kuwait
     ['ISO3','LAO','is_in:country_code','LA'], // Lao Peoples Democratic Republic
     ['ISO3','LBN','is_in:country_code','LB'], // Lebanese Republic
     ['ISO3','LBR','is_in:country_code','LR'], // Republic of Liberia
     ['ISO3','LBY','is_in:country_code','LY'], // Libya
     ['ISO3','LCA','is_in:country_code','LC'], // Saint Lucia
     ['ISO3','LIE','is_in:country_code','LI'], // Principality of Liechtenstein
     ['ISO3','LKA','is_in:country_code','LK'], // Democratic Socialist Republic of Sri Lanka
     ['ISO3','LSO','is_in:country_code','LS'], // Kingdom of Lesotho
     ['ISO3','LTU','is_in:country_code','LT'], // Republic of Lithuania
     ['ISO3','LUX','is_in:country_code','LU'], // Grand Duchy of Luxembourg
     ['ISO3','LVA','is_in:country_code','LV'], // Republic of Latvia
     ['ISO3','MAC','is_in:country_code','MO'], // Macau Special Administrative Region
     ['ISO3','MAF','is_in:country_code','MF'], // Saint Martin
     ['ISO3','MAR','is_in:country_code','MA'], // Kingdom of Morocco
     ['ISO3','MCO','is_in:country_code','MC'], // Principality of Monaco
     ['ISO3','MDA','is_in:country_code','MD'], // Republic of Moldova
     ['ISO3','MDG','is_in:country_code','MG'], // Republic of Madagascar
     ['ISO3','MDV','is_in:country_code','MV'], // Republic of Maldives
     ['ISO3','MEX','is_in:country_code','MX'], // United Mexican States
     ['ISO3','MHL','is_in:country_code','MH'], // Republic of the Marshall Islands
     ['ISO3','MKD','is_in:country_code','MK'], // Republic of Macedonia
     ['ISO3','MLI','is_in:country_code','ML'], // Republic of Mali
     ['ISO3','MLT','is_in:country_code','MT'], // Republic of Malta
     ['ISO3','MMR','is_in:country_code','MM'], // Union of Burma
     ['ISO3','MNE','is_in:country_code','ME'], // Montenegro
     ['ISO3','MNG','is_in:country_code','MN'], // Mongolia
     ['ISO3','MNP','is_in:country_code','MP'], // Commonwealth of the Northern Mariana Islands
     ['ISO3','MOZ','is_in:country_code','MZ'], // Republic of Mozambique
     ['ISO3','MRT','is_in:country_code','MR'], // Islamic Republic of Mauritania
     ['ISO3','MSR','is_in:country_code','MS'], // Montserrat
     ['ISO3','MTQ','is_in:country_code','MQ'], // Department of Martinique
     ['ISO3','MUS','is_in:country_code','MU'], // Republic of Mauritius
     ['ISO3','MWI','is_in:country_code','MW'], // Republic of Malawi
     ['ISO3','MYS','is_in:country_code','MY'], // Malaysia
     ['ISO3','MYT','is_in:country_code','YT'], // Department of Mayotte
     ['ISO3','NAM','is_in:country_code','NA'], // Republic of Namibia
     ['ISO3','NCL','is_in:country_code','NC'], // New Caledonia
     ['ISO3','NER','is_in:country_code','NE'], // Republic of the Niger
     ['ISO3','NFK','is_in:country_code','NF'], // Territory of Norfolk Island
     ['ISO3','NGA','is_in:country_code','NG'], // Federal Republic of Nigeria
     ['ISO3','NIC','is_in:country_code','NI'], // Republic of Nicaragua
     ['ISO3','NIU','is_in:country_code','NU'], // Niue
     ['ISO3','NLD','is_in:country_code','NL'], // Kingdom of the Netherlands
     ['ISO3','NOR','is_in:country_code','NO'], // Kingdom of Norway
     ['ISO3','NPL','is_in:country_code','NP'], // Federal Democratic Republic of Nepal
     ['ISO3','NRU','is_in:country_code','NR'], // Republic of Nauru
     ['ISO3','NZL','is_in:country_code','NZ'], // New Zealand
     ['ISO3','OMN','is_in:country_code','OM'], // Sultanate of Oman
     ['ISO3','PAK','is_in:country_code','PK'], // Islamic Republic of Pakistan
     ['ISO3','PAN','is_in:country_code','PA'], // Republic of Panama
     ['ISO3','PCN','is_in:country_code','PN'], // Pitcairn, Henderson, Ducie, and Oeno Islands
     ['ISO3','PER','is_in:country_code','PE'], // Republic of Peru
     ['ISO3','PHL','is_in:country_code','PH'], // Republic of the Philippines
     ['ISO3','PLW','is_in:country_code','PW'], // Republic of Palau
     ['ISO3','PNG','is_in:country_code','PG'], // Independent State of Papua New Guinea
     ['ISO3','POL','is_in:country_code','PL'], // Republic of Poland
     ['ISO3','PRI','is_in:country_code','PR'], // Commonwealth of Puerto Rico
     ['ISO3','PRK','is_in:country_code','KP'], // Democratic Peoples Republic of Korea
     ['ISO3','PRT','is_in:country_code','PT'], // Portuguese Republic
     ['ISO3','PRY','is_in:country_code','PY'], // Republic of Paraguay
     ['ISO3','PSE','is_in:country_code','PS'], // Palestinian Territory
     ['ISO3','PYF','is_in:country_code','PF'], // French Polynesia
     ['ISO3','QAT','is_in:country_code','QA'], // State of Qatar
     ['ISO3','REU','is_in:country_code','RE'], // Department of Reunion
     ['ISO3','ROU','is_in:country_code','RO'], // Romania
     ['ISO3','RUS','is_in:country_code','RU'], // Russian Federation
     ['ISO3','RWA','is_in:country_code','RW'], // Republic of Rwanda
     ['ISO3','SAU','is_in:country_code','SA'], // Kingdom of Saudi Arabia
     ['ISO3','SDN','is_in:country_code','SD'], // Republic of the Sudan
     ['ISO3','SEN','is_in:country_code','SN'], // Republic of Senegal
     ['ISO3','SGP','is_in:country_code','SG'], // Republic of Singapore
     ['ISO3','SGS','is_in:country_code','GS'], // South Georgia and South Sandwich Islands
     ['ISO3','SHN','is_in:country_code','SH'], // Saint Helena, Ascension, and Tristan da Cunha
     ['ISO3','SLB','is_in:country_code','SB'], // Solomon Islands
     ['ISO3','SLE','is_in:country_code','SL'], // Republic of Sierra Leone
     ['ISO3','SLV','is_in:country_code','SV'], // Republic of El Salvador
     ['ISO3','SMR','is_in:country_code','SM'], // Republic of San Marino
     ['ISO3','SOM','is_in:country_code','SO'], // Somalia, Federal Republic of
     ['ISO3','SPM','is_in:country_code','PM'], // Territorial Collectivity of Saint Pierre and Miquelon
     ['ISO3','SRB','is_in:country_code','RS'], // Republic of Serbia
     ['ISO3','SSD','is_in:country_code','SS'], // Republic of South Sudan
     ['ISO3','STP','is_in:country_code','ST'], // Democratic Republic of Sao Tome and Principe
     ['ISO3','SUR','is_in:country_code','SR'], // Republic of Suriname
     ['ISO3','SVK','is_in:country_code','SK'], // Slovak Republic
     ['ISO3','SVN','is_in:country_code','SI'], // Republic of Slovenia
     ['ISO3','SWE','is_in:country_code','SE'], // Kingdom of Sweden
     ['ISO3','SWZ','is_in:country_code','SZ'], // Kingdom of Swaziland
     ['ISO3','SXM','is_in:country_code','SX'], // Sint Maarten
     ['ISO3','SYC','is_in:country_code','SC'], // Republic of Seychelles
     ['ISO3','SYR','is_in:country_code','SY'], // Syrian Arab Republic
     ['ISO3','TCA','is_in:country_code','TC'], // Turks and Caicos Islands
     ['ISO3','TCD','is_in:country_code','TD'], // Republic of Chad
     ['ISO3','TGO','is_in:country_code','TG'], // Togolese Republic
     ['ISO3','THA','is_in:country_code','TH'], // Kingdom of Thailand
     ['ISO3','TJK','is_in:country_code','TJ'], // Republic of Tajikistan
     ['ISO3','TKL','is_in:country_code','TK'], // Tokelau
     ['ISO3','TKM','is_in:country_code','TM'], // Turkmenistan
     ['ISO3','TLS','is_in:country_code','TL'], // Democratic Republic of Timor-Leste
     ['ISO3','TON','is_in:country_code','TO'], // Kingdom of Tonga
     ['ISO3','TTO','is_in:country_code','TT'], // Republic of Trinidad and Tobago
     ['ISO3','TUN','is_in:country_code','TN'], // Tunisian Republic
     ['ISO3','TUR','is_in:country_code','TR'], // Republic of Turkey
     ['ISO3','TUV','is_in:country_code','TV'], // Tuvalu
     ['ISO3','TWN','is_in:country_code','TW'], // Taiwan
     ['ISO3','TZA','is_in:country_code','TZ'], // United Republic of Tanzania
     ['ISO3','UGA','is_in:country_code','UG'], // Republic of Uganda
     ['ISO3','UKR','is_in:country_code','UA'], // Ukraine
     ['ISO3','URY','is_in:country_code','UY'], // Oriental Republic of Uruguay
     ['ISO3','USA','is_in:country_code','US'], // United States of America
     ['ISO3','UZB','is_in:country_code','UZ'], // Republic of Uzbekistan
     ['ISO3','VAT','is_in:country_code','VA'], // State of the Vatican City
     ['ISO3','VCT','is_in:country_code','VC'], // Saint Vincent and the Grenadines
     ['ISO3','VEN','is_in:country_code','VE'], // Bolivarian Republic of Venezuela
     ['ISO3','VGB','is_in:country_code','VG'], // Virgin Islands, British
     ['ISO3','VIR','is_in:country_code','VI'], // United States Virgin Islands
     ['ISO3','VNM','is_in:country_code','VN'], // Socialist Republic of Vietnam
     ['ISO3','VUT','is_in:country_code','VU'], // Republic of Vanuatu
     ['ISO3','WLF','is_in:country_code','WF'], // Wallis and Futuna
     ['ISO3','WSM','is_in:country_code','WS'], // Independent State of Samoa
     ['ISO3','XAC','is_in:country_code','XA'], // Territory of Ashmore and Cartier Islands
     ['ISO3','XAZ','is_in:country_code','XAZ'], // Entity 1
     ['ISO3','XBI','is_in:country_code','QS'], // Bassas da India
     ['ISO3','XBK','is_in:country_code','XB'], // Baker Island
     ['ISO3','XCR','is_in:country_code','XCR'], // Entity 2
     ['ISO3','XCS','is_in:country_code','XC'], // Coral Sea Islands Territory
     ['ISO3','XCY','is_in:country_code','XCY'], // Entity 3
     ['ISO3','XEU','is_in:country_code','XE'], // Europa Island
     ['ISO3','XGL','is_in:country_code','QX'], // Glorioso Islands
     ['ISO3','XGZ','is_in:country_code','XG'], // Gaza Strip
     ['ISO3','XHO','is_in:country_code','XH'], // Howland Island
     ['ISO3','XJA','is_in:country_code','XU'], // Johnston Atoll
     ['ISO3','XJM','is_in:country_code','XJ'], // Jan Mayen
     ['ISO3','XJN','is_in:country_code','QU'], // Juan de Nova Island
     ['ISO3','XJV','is_in:country_code','XQ'], // Jarvis Island
     ['ISO3','XKM','is_in:country_code','XKM'], // Entity 4
     ['ISO3','XKN','is_in:country_code','XKN'], // Entity 5
     ['ISO3','XKR','is_in:country_code','XM'], // Kingman Reef
     ['ISO3','XKS','is_in:country_code','XK'], // Republic of Kosovo
     ['ISO3','XMW','is_in:country_code','QM'], // Midway Islands
     ['ISO3','XNV','is_in:country_code','XV'], // Navassa Island
     ['ISO3','XPL','is_in:country_code','XL'], // Palmyra Atoll
     ['ISO3','XPR','is_in:country_code','XP'], // Paracel Islands
     ['ISO3','XQP','is_in:country_code','QP'], // Etorofu, Habomai, Kunashiri, and Shikotan Islands
     ['ISO3','XQZ','is_in:country_code','QZ'], // Akrotiri
     ['ISO3','XSP','is_in:country_code','XS'], // Spratly Islands
     ['ISO3','XSV','is_in:country_code','XR'], // Svalbard
     ['ISO3','XTR','is_in:country_code','XT'], // Tromelin Island
     ['ISO3','XWB','is_in:country_code','XW'], // West Bank
     ['ISO3','XWK','is_in:country_code','QW'], // Wake Island
     ['ISO3','XXD','is_in:country_code','XD'], // Dhekelia
     ['ISO3','XXX','is_in:country_code','[None]'], // No Mans Land
     ['ISO3','YEM','is_in:country_code','YE'], // Republic of Yemen
     ['ISO3','ZAF','is_in:country_code','ZA'], // Republic of South Africa
     ['ISO3','ZMB','is_in:country_code','ZM'], // Republic of Zambia
     ['ISO3','ZWE','is_in:country_code','ZW'], // Republic of Zimbabwe

     // MISCLU1 - Soils
     ['MISCLU1','Dunes/Shifting Sands','natural','dune'],
     ['MISCLU1','None','surface','no_information'],
     ['MISCLU1','Rock Debris/Desert Detritus','surface','rock_debris_or_desert_detritus'],
     ['MISCLU1','Salt Flats','surface','salt'],

     // OP_STATUS - Operational Status
     ['OP_STATUS','Operational','operational_status','operational'],
     ['OP_STATUS','Under Construction','condition','construction'],

     // OP_CON - Operational Control?
     ['OP_CON','Commercial','controlling_authority','public'],
     ['OP_CON','Government','controlling_authority','national'],

     // OPER_TYPE - Natural Resources
     ['OPER_TYPE','Brine Operation','YYY','Brine Operation'],
     ['OPER_TYPE','Geothermal','YYY','Geothermal'],
     ['OPER_TYPE','Leach','YYY','Leach'],
     ['OPER_TYPE','Offshore','YYY','Offshore'],
     ['OPER_TYPE','Placer','YYY','Placer'],
     ['OPER_TYPE','Processing Plant','YYY','Processing Plant'],
     ['OPER_TYPE','Surface','YYY','Surface'],
     ['OPER_TYPE','Surface - Underground','YYY','Surface - Underground'],
     ['OPER_TYPE','Underground','YYY','Underground'],
     ['OPER_TYPE','Well','YYY','Well'],
     ['OPER_TYPE','Quarry','YYY','Quarry'],
     ['OPER_TYPE','Mine','YYY','Mine'],
     ['OPER_TYPE','Plantation','YYY','Plantation'],
     ['OPER_TYPE','Refinery','YYY','Refinery'],
     ['OPER_TYPE','Smelter','YYY','Smelter'],

     // OWNERSHIP - Free Trade Zones
     ['OWNERSHIP','Federal Government','free_trade_zone:ownership','Federal Government'],
     ['OWNERSHIP','State Government','free_trade_zone:ownership','State Government'],
     ['OWNERSHIP','Under Parallel Authority','free_trade_zone:ownership','Under Parallel Authority'],
     ['OWNERSHIP','Private','free_trade_zone:ownership','Private'],
     ['OWNERSHIP','Public','free_trade_zone:ownership','Public'],

     // OWNERTYPE - Media Outlets
     ['OWNERTYPE','Government','ownership','government'],
     ['OWNERTYPE','Private','ownership','private'],

     // PERMAFROST - Soils
     ['PERMAFROST','Discontinuous','permafrost','discontinuous'],
     ['PERMAFROST','None','permafrost','none'],
     ['PERMAFROST','Permafrost','permafrost','yes'],

     // PHASE1 - Soils
     ['PHASE1','Cerrado','soil:phase1','Cerrado'],
     ['PHASE1','Duripan','soil:phase1','Duripan'],
     ['PHASE1','Fragipan','soil:phase1','Fragipan'],
     ['PHASE1','Lithic','soil:phase1','Lithic'],
     ['PHASE1','None','soil:phase1','None'],
     ['PHASE1','Petric','soil:phase1','Petric'],
     ['PHASE1','Petrocalcic','soil:phase1','Petrocalcic'],
     ['PHASE1','Petroferric','soil:phase1','Petroferric'],
     ['PHASE1','Petrogypsic','soil:phase1','Petrogypsic'],
     ['PHASE1','Phreatic','soil:phase1','Phreatic'],
     ['PHASE1','Saline','soil:phase1','Saline'],
     ['PHASE1','Sodic','soil:phase1','Sodic'],
     ['PHASE1','Stony','soil:phase1','Stony'],

     // PHASE2 - Soils
     ['PHASE2','Cerrado','soil:phase2','Cerrado'],
     ['PHASE2','Duripan','soil:phase2','Duripan'],
     ['PHASE2','Fragipan','soil:phase2','Fragipan'],
     ['PHASE2','Lithic','soil:phase2','Lithic'],
     ['PHASE2','None','soil:phase2','None'],
     ['PHASE2','Petric','soil:phase2','Petric'],
     ['PHASE2','Petrocalcic','soil:phase2','Petrocalcic'],
     ['PHASE2','Petroferric','soil:phase2','Petroferric'],
     ['PHASE2','Petrogypsic','soil:phase2','Petrogypsic'],
     ['PHASE2','Phreatic','soil:phase2','Phreatic'],
     ['PHASE2','Saline','soil:phase2','Saline'],
     ['PHASE2','Sodic','soil:phase2','Sodic'],
     ['PHASE2','Stony','soil:phase2','Stony'],

     // PRI_COM - Primary Commodities
     ['PRI_COM','Gold','YYY','Gold'],
     ['PRI_COM','Silver','YYY','Silver'],
     ['PRI_COM','Iron','YYY','Iron'],
     ['PRI_COM','REE','YYY','REE'],
     ['PRI_COM','Clay','YYY','Clay'],
     ['PRI_COM','Coal','YYY','Coal'],
     ['PRI_COM','Copper','YYY','Copper'],
     ['PRI_COM','Fluorspar','YYY','Fluorspar'],
     ['PRI_COM','Granite','YYY','Granite'],
     ['PRI_COM','Indium','YYY','Indium'],
     ['PRI_COM','Lead','YYY','Lead'],
     ['PRI_COM','Limestone','YYY','Limestone'],
     ['PRI_COM','Magnesite','YYY','Magnesite'],
     ['PRI_COM','Nickel','YYY','Nickel'],
     ['PRI_COM','Salt','YYY','Salt'],
     ['PRI_COM','Tungsten','YYY','Tungsten'],
     ['PRI_COM','Uranium','YYY','Uranium'],
     ['PRI_COM','Zinc','YYY','Zinc'],
     ['PRI_COM','Antimony','YYY','Antimony'],
     ['PRI_COM','Barium-Barite','YYY','Barium-Barite'],
     ['PRI_COM','Bentonite','YYY','Bentonite'],
     ['PRI_COM','Gemstone','YYY','Gemstone'],
     ['PRI_COM','Gypsum-Anhydrite','YYY','Gypsum-Anhydrite'],
     ['PRI_COM','Manganese','YYY','Manganese'],
     ['PRI_COM','Mercury','YYY','Mercury'],
     ['PRI_COM','Platinum','YYY','Platinum'],
     ['PRI_COM','Titanium','YYY','Titanium'],
     ['PRI_COM','Aluminum','YYY','Aluminum'],
     ['PRI_COM','Arsenic','YYY','Arsenic'],
     ['PRI_COM','Barite','YYY','Barite'],
     ['PRI_COM','Boron','YYY','Boron'],
     ['PRI_COM','Calcium','YYY','Calcium'],
     ['PRI_COM','Chromium','YYY','Chromium'],
     ['PRI_COM','Cobalt','YYY','Cobalt'],
     ['PRI_COM','Diatomite','YYY','Diatomite'],
     ['PRI_COM','Gypsum','YYY','Gypsum'],
     ['PRI_COM','Marble','YYY','Marble'],
     ['PRI_COM','Molybdenum','YYY','Molybdenum'],
     ['PRI_COM','Onyx','YYY','Onyx'],
     ['PRI_COM','Perlite','YYY','Perlite'],
     ['PRI_COM','Phosphorous','YYY','Phosphorous'],
     ['PRI_COM','Potash','YYY','Potash'],
     ['PRI_COM','Pozzolana','YYY','Pozzolana'],
     ['PRI_COM','Silicate','YYY','Silicate'],
     ['PRI_COM','Silicon','YYY','Silicon'],
     ['PRI_COM','Strontium','YYY','Strontium'],
     ['PRI_COM','Sulfur','YYY','Sulfur'],
     ['PRI_COM','Palm Oil','YYY','Palm Oil'],
     ['PRI_COM','Crude Oil','YYY','Crude Oil'],
     ['PRI_COM','Potassium','YYY','Potassium'],
     ['PRI_COM','Water','YYY','Water'],
     ['PRI_COM','Bauxite','YYY','Bauxite'],

     // RUNWAY - Runway Type
     ['RUNWAY','Paved','aeroway:pavement','paved'],
     ['RUNWAY','Unpaved','aeroway:pavement','unpaved'],

     // R1_SURFACE - Runway 1 Surface
     ['R1_SURFACE','Asphalt','surface','asphalt'],
     ['R1_SURFACE','Dirt','surface','earth'],
     ['R1_SURFACE','Grass','surface','grass'],
     ['R1_SURFACE','Concrete','surface','concrete'],

     // R2_SURFACE - Runway 2 Surface
     ['R2_SURFACE','Asphalt','surface:2','asphalt'],
     ['R2_SURFACE','Dirt','surface:2','earth'],
     ['R2_SURFACE','Grass','surface:2','grass'],
     ['R2_SURFACE','Concrete','surface:2','concrete'],

     // SPA_ACC - Spatial Accuracy
     ['SPA_ACC','1 - High','hgis:accuracy','high'],
     ['SPA_ACC','2 - Medium','hgis:accuracy','medium'],
     ['SPA_ACC','3 - Low','hgis:accuracy','low'],
     ['SPA_ACC','4 - Regional','hgis:accuracy','regional'],
     ['SPA_ACC','5 - Country','hgis:accuracy','country'],

     // Status - Protected area status
     ['STATUS','Proposed','site_status','proposed'],
     ['STATUS','Designated','site_status','designated'],
     ['STATUS','Not Reported','site_status','not_reported'],

     // STATUS - Free Trade Zones
     ['STATUS','Operational','operational_status','operational'],
     ['STATUS','Under Construction','condition','construction'],
     ['STATUS','Declaration','operational_status','planned'],

     // TYPE_AREA - Type of protected area
     ['protected$TYPE1','Terrestrial','protected_area','terrestrial'],
     ['protected$TYPE1','Marine','protected_area','marine'],
     ['protected$TYPE1','Terrestrial/Marine','protected_area','terrestrial_or_marine'],
     ['protected$TYPE1','Not Reported','protected_area','not_reported'],

     // TYPE, TYPE1 and TYPE2 are shared by a lot of features
     // This is ugly
     ['agriculture$TYPE1','Aquaculture','landuse','aquaculture'],
     ['agriculture$TYPE1','Farm','place','farm'],
     ['agriculture$TYPE1','Livestock','landuse','livestock'],
     ['agriculture$TYPE1','Nursery','landuse','plant_nursery'],
     ['agriculture$TYPE1','Orchard','landuse','orchard'],
     ['agriculture$TYPE1','Vineyard','landuse','vineyard'],

     ['agriculture$TYPE2','Breeding Ground','livestock','breeding ground'],
     ['agriculture$TYPE2','Cooperative','agriculture:type','cooperative'],
     ['agriculture$TYPE2','Dairy','crop','dairy'],
     ['agriculture$TYPE2','Duck','livestock','duck'],
     ['agriculture$TYPE2','Fisheries','livestock','fish'],
     ['agriculture$TYPE2','Goat','livestock','goat'],
     ['agriculture$TYPE2','Greenhouse','building','greenhouse'], // Not great, conflict with landuse=greenhouse_horticulture
     ['agriculture$TYPE2','Ostrich','livestock','ostrich'],
     ['agriculture$TYPE2','Other','livestock','other'],
     ['agriculture$TYPE2','Pig','livestock','pig'],
     ['agriculture$TYPE2','Pigeon','livestock','pigeon'],
     ['agriculture$TYPE2','Poultry','livestock','poultry'],
     ['agriculture$TYPE2','Rabbit','livestock','rabbit'],
     ['agriculture$TYPE2','Rice Field','crop','rice'],
     ['agriculture$TYPE2','Salt','product','salt'],

     ['airfield$TYPE','Commercial','controlling_authority','civilian'],
     ['airfield$TYPE','Military','controlling_authority','military'],
     ['airfield$TYPE','Dual','controlling_authority','joint_military_civilian'],

     ['border$TYPE1','Official','border_type','official'],
     ['border$TYPE1','Unofficial','border_type','unofficial'],

     ['border$TYPE2','Border Structure','border:type','border_structure'],
     ['border$TYPE2','Established Path','border:type','established_path'],
     ['border$TYPE2','Multiple Tire Tracks','border:type','multiple_tire_tracks'],
     ['border$TYPE2','Trail','border:type','trail'],
     ['border$TYPE2','Village','border:type','village'],

     ['bridge$TYPE','Bridge','bridge','yes'],
     ['bridge$TYPE','Tunnel','tunnel','yes'],

     ['bridge$TYPE2','Road','transport:type','road'],
     ['bridge$TYPE2','Rail','transport:type','railway'],
     ['bridge$TYPE2','Pedestrian','transport:type','pedestrian'],
     ['bridge$TYPE2','Water','bridge:type','water'], /// What is this???

     ['commercial$TYPE1','Service','raw:commercialTYPE1','service'],
     ['commercial$TYPE1','Retail','raw:commercialTYPE1','retail'],
     ['commercial$TYPE1','Manufacturing','raw:commercialTYPE1','manufacturing'],
     ['commercial$TYPE1','Other','raw:commercialTYPE1','other'],
     ['commercial$TYPE1','Industrial','raw:commercialTYPE1','industrial'],
     ['commercial$TYPE1','Financial','raw:commercialTYPE1','financial'],
     ['commercial$TYPE1','Automotive','raw:commercialTYPE1','automotive'],
     ['commercial$TYPE1','Telecommunications','raw:commercialTYPE1','telecommunications'],

     ['commercial$TYPE2','Airline','shop','travel_agency'],
     ['commercial$TYPE2','ATM','amenity','atm'],
     ['commercial$TYPE2','Auto Repair','shop','car_repair'],
     ['commercial$TYPE2','Bakery','shop','bakery'],
     ['commercial$TYPE2','Bank','amenity','bank'],
     ['commercial$TYPE2','Bar','amenity','bar'],
     ['commercial$TYPE2','Beauty Salon','shop','beauty'],
     ['commercial$TYPE2','Brewery','building','brewery'],
     ['commercial$TYPE2','Butcher','shop','butcher'],
     ['commercial$TYPE2','Car Dealership','shop','car'],
     ['commercial$TYPE2','Car Rental','amenity','car_rental'],
     ['commercial$TYPE2','Car Wash','amenity','car_wash'],
     ['commercial$TYPE2','Computer','shop','computer'],
     ['commercial$TYPE2','Construction','raw:commercialTYPE2','construction'],
     ['commercial$TYPE2','Day Care','amenity','child_care'],
     ['commercial$TYPE2','Delicatessen','shop','deli'],
     ['commercial$TYPE2','Electronics','shop','electronics'],
     ['commercial$TYPE2','Entertainment','amenity','entertainment'],
     ['commercial$TYPE2','Factory','building','industrial'],
     ['commercial$TYPE2','Film','raw:commercialTYPE2','film'],
     ['commercial$TYPE2','Freight - Shipping','raw:commercialTYPE2','freight - shipping'],
     ['commercial$TYPE2','Funeral Home','shop','funeral_directors'],
     ['commercial$TYPE2','Fuel','shop','fuel'],
     ['commercial$TYPE2','Gas','shop','gas'],
     ['commercial$TYPE2','Grocery','shop','grocery'],
     ['commercial$TYPE2','Heavy Machinery','raw:commercialTYPE2','heavy machinery'],
     ['commercial$TYPE2','Legal','office','lawyer'],
     ['commercial$TYPE2','Market','amenity','marketplace'],
     ['commercial$TYPE2','Medical','raw:commercialTYPE2','medical'],
     ['commercial$TYPE2','Mining','raw:commercialTYPE2','mining'],
     ['commercial$TYPE2','Nursery','raw:commercialTYPE2','nursery'],
     ['commercial$TYPE2','Office','building','office'],
     ['commercial$TYPE2','Other','raw:commercialTYPE2','other'],
     ['commercial$TYPE2','Research','building','research'],
     ['commercial$TYPE2','Restaurant','amenity','restaurant'],
     ['commercial$TYPE2','Shipping','raw:commercialTYPE2','shipping'],
     ['commercial$TYPE2','Store','shop','general'],
     ['commercial$TYPE2','Telecommunications','shop','mobile_phone'],
     ['commercial$TYPE2','Telephone Pole','man_made','telephone_pole'], // Not great
     ['commercial$TYPE2','Television','shop','television'], // Not great
     ['commercial$TYPE2','Tourist','tourism','information'],
     ['commercial$TYPE2','Tower','man_made','tower'],
     ['commercial$TYPE2','Veterinarian','amenity','veterinary'],

     ['crime$TYPE','Armed Robbery','crime_event','armed_robbery'],
     ['crime$TYPE','Assault','crime_event','assault'],
     ['crime$TYPE','Corruption','crime_event','corruption'],
     ['crime$TYPE','Drug Smuggling','crime_event','drug_smuggling'],
     ['crime$TYPE','Extortion','crime_event','extortion'],
     ['crime$TYPE','Fuel Smuggling','crime_event','fuel_smuggling'],
     ['crime$TYPE','Hijack','crime_event','hijack'],
     ['crime$TYPE','IED','crime_event','ied'],
     ['crime$TYPE','Kidnapping','crime_event','kidnapping'],
     ['crime$TYPE','Murder','crime_event','murder'],
     ['crime$TYPE','Piracy','crime_event','piracy'],
     ['crime$TYPE','Robbery','crime_event','robbery'],
     ['crime$TYPE','Theft','crime_event','theft'],
     ['crime$TYPE','Violence','crime_event','violence'],
     ['crime$TYPE','Weapons Smuggling','crime_event','weapons_smuggling'],

     ['cultural$TYPE','Burial Site','raw:culturalTYPE','burial_site'],
     ['cultural$TYPE','Cultural Center','amenity','cultural_center'],
     ['cultural$TYPE','Memorial','historic','memorial'],
     ['cultural$TYPE','Monument','historic','monument'],
     ['cultural$TYPE','Museum','tourism','museum'],
     ['cultural$TYPE','Other','raw:culturalTYPE','other'],
     ['cultural$TYPE','Sculpture','artwork:type','sculpture'],
     ['cultural$TYPE','Statue','artwork:type','statue'],
     ['cultural$TYPE','Theatre','amenity','theatre'],

     ['dams$TYPE','Electricity','raw:damsTYPE','electricity'],
     ['dams$TYPE','Electricity, Water Supply','raw:damsTYPE','electricity, water supply'],
     ['dams$TYPE','Irrigation','raw:damsTYPE','irrigation'],
     ['dams$TYPE','Irrigation, Electricity, Water Supply','raw:damsTYPE','irrigation_electricity_water_supply'],
     ['dams$TYPE','Irrigation, Water Supply','raw:damsTYPE','irrigation, water supply'],
     ['dams$TYPE','Water Supply','raw:damsTYPE','water supply'],

     ['education$TYPE1','Primary','isced:level','1'],
     ['education$TYPE1','Secondary','isced:level','2'],
     ['education$TYPE1','Tertiary','amenity','university'],
     ['education$TYPE1','Vocational','amenity','college'],

     ['education$TYPE2','Public','school:type','public'],
     ['education$TYPE2','Private','school:type','private'],
     ['education$TYPE2','Military','school:type','military'],

     ['electrical$TYPE','Generator','raw:electricalTYPE','generator'],
     ['electrical$TYPE','Solar Panel','raw:electricalTYPE','solar panel'],
     ['electrical$TYPE','Substation','raw:electricalTYPE','substation'],
     ['electrical$TYPE','Transmission Pole','raw:electricalTYPE','transmission pole'],
     ['electrical$TYPE','Transmission Tower','raw:electricalTYPE','transmission tower'],
     ['electrical$TYPE','Transformer','raw:electricalTYPE','transformer'],

     ['embassy$TYPE','Consulate','diplomatic','consulate'],
     ['embassy$TYPE','Embassy','diplomatic','embassy'],
     ['embassy$TYPE','Foreign Mission','diplomatic','mission'],

     ['government$TYPE1','Civic','raw:governmentTYPE1','civic'],
     ['government$TYPE1','Foreign','raw:governmentTYPE1','foreign'],
     ['government$TYPE1','Other','raw:governmentTYPE1','other'],
     ['government$TYPE1','Political','raw:governmentTYPE1','political'],

     ['government$TYPE2','Local Government Facility','raw:governmentTYPE2','local government facility'],
     ['government$TYPE2','National Facility','raw:governmentTYPE2','national facility'],
     ['government$TYPE2','Other','raw:governmentTYPE2','other'],
     ['government$TYPE2','Political Party Facility','raw:governmentTYPE2','political party facility'],
     ['government$TYPE2','Post Office','amenity','post_office'],
     ['government$TYPE2','Social','raw:governmentTYPE2','social'],
     ['government$TYPE2','State Facility','raw:governmentTYPE2','state facility'],

     ['hadr$TYPE1','Drought','hadr','drought'],
     ['hadr$TYPE1','Earthquake','hadr','earthquake'],
     ['hadr$TYPE1','Epidemic','hadr','epidemic'],
     ['hadr$TYPE1','Flood','hadr','flood'],
     ['hadr$TYPE1','Industrial Accident','hadr','industrial_accident'],
     ['hadr$TYPE1','Insect Infestation','hadr','insect_infestation'],
     ['hadr$TYPE1','Misc. Accident','hadr','misc_accident'],
     ['hadr$TYPE1','Storm','hadr','storm'],
     ['hadr$TYPE1','Transport Accident','hadr','transport_accident'],
     ['hadr$TYPE1','Wildfire','hadr','wildfire'],

     ['hadr$TYPE2','Air','hadr:type','air'],
     ['hadr$TYPE2','Bacterial Infectious Disease','hadr:type','bacterial_infectious disease'],
     ['hadr$TYPE2','Collapse','hadr:type','collapse'],
     ['hadr$TYPE2','Cyclone','hadr:type','cyclone'],
     ['hadr$TYPE2','Drought','hadr:type','drought'],
     ['hadr$TYPE2','Earthquake','hadr:type','earthquake'],
     ['hadr$TYPE2','Explosion','hadr:type','explosion'],
     ['hadr$TYPE2','Fire','hadr:type','fire'],
     ['hadr$TYPE2','Flood','hadr:type','flood'],
     ['hadr$TYPE2','Flash Flood','hadr:type','flash_flood'],
     ['hadr$TYPE2','Forest Fire','hadr:type','forest_fire'],
     ['hadr$TYPE2','General Flood','hadr:type','general_flood'],
     ['hadr$TYPE2','Landslide','hadr:type','landslide'],
     ['hadr$TYPE2','Local Storm','hadr:type','local_storm'],
     ['hadr$TYPE2','Road','hadr:type','road'],
     ['hadr$TYPE2','Tropical Storm','hadr:type','tropical_storm'],
     ['hadr$TYPE2','Viral Infectious Disease','hadr:type','viral_infectious_disease'],
     ['hadr$TYPE2','Water','hadr:type','water'],

     ['health$TYPE','Bacterial Infectious Diseases','health_event','bacterial_infectious_diseases'],
     ['health$TYPE','Parasite Borne','health_event','parasite_borne'],
     ['health$TYPE','Viral Infectious Diseases','health_event','viral_infectious_diseases'],

     ['hydrop$TYPE','Fire Hydrant','emergency','fire_hydrant'],
     ['hydrop$TYPE','Water Supply','amenity','water_point'],
     ['hydrop$TYPE','Water Tank','man_made','water_tank'],
     ['hydrop$TYPE','Water Tower','man_made','water_tower'],
     ['hydrop$TYPE','Water Treatment Plant','man_made','water_works'],
     ['hydrop$TYPE','Well','man_made','water_well'],

     ['hydroa$TYPE','Lake','water','lake'],
     ['hydroa$TYPE','River','waterway','river'],
     ['hydroa$TYPE','Inland Water','raw:hydroaTYPE','inland water'],
     ['hydroa$TYPE','Land Subject to Inundation','water','intermittent'],
     ['hydroa$TYPE','Reservoir','water','reservoir'],
     ['hydroa$TYPE','Wetlands','natural','wetland'],
     ['hydroa$TYPE','Irrigated Area','irrigation','yes'],
     ['hydroa$TYPE','Lagoon','water','lagoon'],

     // Moved to input only. Custom rule for export
//      ['hydrol$TYPE','Lake','raw:hydrolTYPE','lake'],
//      ['hydrol$TYPE','River/Stream','raw:hydrolTYPE','river/stream'],
//      ['hydrol$TYPE','Inland Water','raw:hydrolTYPE','inland water'],
//      ['hydrol$TYPE','Land Subject to Inundation','raw:hydrolTYPE','land subject to inundation'],

     ['lodging$TYPE1','Permanent','raw:lodgingTYPE1','permanent'],
     ['lodging$TYPE1','Transient','raw:lodgingTYPE1','transient'],

     ['lodging$TYPE2','Apartment','lodging:status','apartment'],
     ['lodging$TYPE2','Bed & Breakfast','lodging:status','bed & breakfast'],
     ['lodging$TYPE2','Camp Site','tourism','camp site'],
     ['lodging$TYPE2','Condominium','raw:lodgingTYPE2','condominium'],
     ['lodging$TYPE2','Dormitory','raw:lodgingTYPE2','dormitory'],
     ['lodging$TYPE2','Elite Area','raw:lodgingTYPE2','elite area'],
     ['lodging$TYPE2','Guest House','raw:lodgingTYPE2','guest house'],
     ['lodging$TYPE2','Hostel','raw:lodgingTYPE2','hostel'],
     ['lodging$TYPE2','Hotel','raw:lodgingTYPE2','hotel'],
     ['lodging$TYPE2','Housing','raw:lodgingTYPE2','housing'],
     ['lodging$TYPE2','Inn','raw:lodgingTYPE2','inn'],
     ['lodging$TYPE2','Lodge','raw:lodgingTYPE2','lodge'],
     ['lodging$TYPE2','Motel','raw:lodgingTYPE2','motel'],
     ['lodging$TYPE2','Resort','raw:lodgingTYPE2','resort'],
     ['lodging$TYPE2','Villas','raw:lodgingTYPE2','villas'],

     ['marine$TYPE','Beach','raw:marineTYPE','beach'],
     ['marine$TYPE','Docking','raw:marineTYPE','docking'],
     ['marine$TYPE','Harbor','raw:marineTYPE','harbor'],
     ['marine$TYPE','Jetty','raw:marineTYPE','jetty'],
     ['marine$TYPE','Levee','raw:marineTYPE','levee'],
     ['marine$TYPE','Lighthouses & Beacons','raw:marineTYPE','lighthouses & beacons'],
     ['marine$TYPE','Lock','raw:marineTYPE','lock'],
     ['marine$TYPE','Marina','raw:marineTYPE','marina'],
     ['marine$TYPE','Pier','raw:marineTYPE','pier'],
     ['marine$TYPE','Ship Yard','raw:marineTYPE','ship yard'],

     ['media$TYPE','Magazine','raw:mediaTYPE','magazine'],
     ['media$TYPE','Newspaper','raw:mediaTYPE','newspaper'],
     ['media$TYPE','Radio','raw:mediaTYPE','radio'],
     ['media$TYPE','Television','raw:mediaTYPE','television'],
     ['media$TYPE','Yearbook','raw:mediaTYPE','yearbook'],

     ['medical$TYPE1','Clinic','amenity','clinic'],
     ['medical$TYPE1','Dispensary','amenity','dispensary'],
     ['medical$TYPE1','Hospital','amenity','hospital'],
     ['medical$TYPE1','Medical Facility','raw:medicalTYPE1','medical_facility'],
     ['medical$TYPE1','Pharmacy','amenity','pharmacy'],
     ['medical$TYPE1','Rehabilitation Center','raw:medicalTYPE1','Rehabilitation Center'],
     ['medical$TYPE1','Sanatorium','amenity','sanatorium'],

     ['medical$TYPE2','Bath House','raw:medicalTYPE2','bath_house'],
     ['medical$TYPE2','Children','raw:medicalTYPE2','children'],
     ['medical$TYPE2','Dental','raw:medicalTYPE2','dental'],
     ['medical$TYPE2','Emergency','raw:medicalTYPE2','emergency'],
     ['medical$TYPE2','Headquarters','raw:medicalTYPE2','headquarters'],
     ['medical$TYPE2','Health Center','raw:medicalTYPE2','Health Complex'],
     ['medical$TYPE2','Health Complex','raw:medicalTYPE2','Health Complex'],
     ['medical$TYPE2','Hot Spring','raw:medicalTYPE2','Hot Spring'],
     ['medical$TYPE2','Other','raw:medicalTYPE2','other'],
     ['medical$TYPE2','Pharmaceutical','raw:medicalTYPE2','pharmaceutical'],
     ['medical$TYPE2','Rehabilitation','raw:medicalTYPE2','Rehabilitation'],
     ['medical$TYPE2','Spa','raw:medicalTYPE2','spa'],

     ['military$TYPE','Air Force','military:service','air_force'],
     ['military$TYPE','Army','military:service','army'],
     ['military$TYPE','Coast Guard','military:service','coast_guard'],
     ['military$TYPE','Marines','military:service','marines'],
     ['military$TYPE','Navy','military:service','navy'],
     ['military$TYPE','Security Force','military:service','security_force'],
     ['military$TYPE','Special Operations Force','military:service','special_operations_force'],
     ['military$TYPE','United Nations','military:service','united_nations'],

     ['natural$TYPE','Arch','XXX','YYY'],
     ['natural$TYPE','Bay','XXX','YYY'],
     ['natural$TYPE','Beach','XXX','YYY'],
     ['natural$TYPE','Cape','XXX','YYY'],
     ['natural$TYPE','Cave','XXX','YYY'],
     ['natural$TYPE','Cliff','XXX','YYY'],
     ['natural$TYPE','Cove','XXX','YYY'],
     ['natural$TYPE','Depression','XXX','YYY'],
     ['natural$TYPE','Desert','natural','desert'],
     ['natural$TYPE','Dike','XXX','YYY'],
     ['natural$TYPE','Dune','XXX','YYY'],
     ['natural$TYPE','Escarpment','XXX','YYY'],
     ['natural$TYPE','Ford','XXX','YYY'],
     ['natural$TYPE','Forest','XXX','YYY'],
     ['natural$TYPE','Gorge','natural','gorge'],
     ['natural$TYPE','Hammock','XXX','YYY'],
     ['natural$TYPE','Hill','XXX','YYY'],
     ['natural$TYPE','Island','XXX','YYY'],
     ['natural$TYPE','Lagoon','XXX','YYY'],
     ['natural$TYPE','Landmark','raw:naturalTYPE','landmark'],
     ['natural$TYPE','Mesa','XXX','YYY'],
     ['natural$TYPE','Mountain','natural','mountain'],
     ['natural$TYPE','Mud Flats','XXX','YYY'],
     ['natural$TYPE','Oasis','XXX','YYY'],
     ['natural$TYPE','Other','waterway','other'],
     ['natural$TYPE','Pass','XXX','YYY'],
     ['natural$TYPE','Peak','natural','peak'],
     ['natural$TYPE','Plain','XXX','YYY'],
     ['natural$TYPE','Plateau','XXX','YYY'],
     ['natural$TYPE','Point','XXX','YYY'],
     ['natural$TYPE','Ponds','water','pond'],
     ['natural$TYPE','Preserve/Refuge','raw:naturalTYPE','preserve/refuge'],
     ['natural$TYPE','Reef','XXX','YYY'],
     ['natural$TYPE','Ridge','XXX','YYY'],
     ['natural$TYPE','Rock','XXX','YYY'],
     ['natural$TYPE','Salt Area','XXX','YYY'],
     ['natural$TYPE','Sinkhole','XXX','YYY'],
     ['natural$TYPE','Springs','XXX','YYY'],
     ['natural$TYPE','Spur','XXX','YYY'],
     ['natural$TYPE','Valley','XXX','YYY'],
     ['natural$TYPE','Volcano','natural','volcano'],
     ['natural$TYPE','Wadi','XXX','YYY'],
     ['natural$TYPE','Waterfall','XXX','YYY'],
     ['natural$TYPE','Waterfall','waterway','waterfall'],
     ['natural$TYPE','Wetland','XXX','YYY'],

     ['pplant$TYPE','Coal','generator:source','coal'],
     ['pplant$TYPE','Combustion','generator:source','combustion'], // ????
     ['pplant$TYPE','Diesel','generator:source','diesel'],
     ['pplant$TYPE','Electric','plant:output:electricity','yes'], // ????
     ['pplant$TYPE','Gas','generator:source','gas'],
     ['pplant$TYPE','Geothermal','generator:source','geothermal'],
     ['pplant$TYPE','Hydroelectricity','generator:source','hydro'],
     ['pplant$TYPE','Nuclear','generator:source','nuclear'],
     ['pplant$TYPE','Oil','generator:source','oil'],
     ['pplant$TYPE','Wind','generator:source','wind'],

     ['public$TYPE','Administrative Facility','ofice','public_administration'],
     ['public$TYPE','Customs','amenity','customs'],
     ['public$TYPE','Check Point','amenity','check_point'],
     ['public$TYPE','Fire Station','amenity','fire_station'],
     ['public$TYPE','Police Station','amenity','police'],
     ['public$TYPE','Security Station','use','security_services'], // TDSv61

     ['prison$TYPE','General','prison:type','general'],
     ['prison$TYPE','Juvenile','amenity','juvenile_corrections'],
     ['prison$TYPE','National','prison:type','national'],
     ['prison$TYPE','Regional','prison:type','regional'],
     ['prison$TYPE','Solitary','prison:type','solitary'],

     ['railwayl$TYPE1','National','railway:level','national'],
     ['railwayl$TYPE1','Regional','railway:level','regional'],

     // Moved to input only. Output via custom rules
//      ['railwayl$TYPE2','Freight & Passenger','railway:type','freight_and_passenger'],
//      ['railwayl$TYPE2','Freight','railway:type','freight'],
//      ['railwayl$TYPE2','Passenger','railway:type','passenger'],
     ['railwayl$TYPE2','Subway','railway','subway'],
     ['railwayl$TYPE2','Tram','railway','tram'],

     ['railwayp$TYPE1','Elite','railway:type','elite'],
//      ['railwayp$TYPE1','Freight & Passenger','railway:type','freight_and_passenger'],
//      ['railwayp$TYPE1','Freight','railway:type','freight'],
//      ['railwayp$TYPE1','Passenger','railway:type','passenger'],
     ['railwayp$TYPE1','Tram Subway','railway','tram_subway'],

     ['railwayp$TYPE2','Depot','raw:railwaypTYPE2','depot'],
     ['railwayp$TYPE2','Station','railway','station'],
     ['railwayp$TYPE2','Stop','railway','stop'],
     ['railwayp$TYPE2','Yard','service','yard'],

     ['recreation$TYPE','Other','leisure','other'],
     ['recreation$TYPE','Park','leisure','park'],
     ['recreation$TYPE','Pool','leisure','swimming_pool'],
     ['recreation$TYPE','Sports Facility','sport','multi'],

     ['refugee$TYPE','IDP Camp','idp','yes'],
     ['refugee$TYPE','Refugee Camp','refugee','yes'],
     ['refugee$TYPE','Refugee Location','raw:refugeeTYPE','refugee location'],
     ['refugee$TYPE','Refugee Return','raw:refugeeTYPE','refugee return'],
     ['refugee$TYPE','Refugee Settlement','amenity','refugee_housing'],
     ['refugee$TYPE','Urban Refugee Area','raw:refugeeTYPE','urban refugee area'],
     ['refugee$TYPE','Village of Interest','raw:refugeeTYPE','village of interest'],

     // NOTE: This is taken from the SUBTYPE value, not the domain
     ['religion$TYPE1','0','religion','christian'],
     ['religion$TYPE1','1','religion','muslim'],
     ['religion$TYPE1','2','religion','hindu'],
     ['religion$TYPE1','3','religion','buddhist'],
     ['religion$TYPE1','5','religion','jewish'],
     ['religion$TYPE1','6','religion','ethnic'],
     ['religion$TYPE1','7','religion','juche'],
     ['religion$TYPE1','8','religion','sikh'],
     ['religion$TYPE1','9','religion','unaffiliated'],
     ['religion$TYPE1','10','religion','999999'],
     ['religion$TYPE1','11','religion','agnostic'],
     ['religion$TYPE1','12','religion','mixed'],
     ['religion$TYPE1','13','religion','gnostic'],

     ['religion$TYPE2','Sunni','denomination','sunni'],
     ['religion$TYPE2','Shia','denomination','shia'],
     ['religion$TYPE2','Wahhabi','denomination','wahhabi'],
     ['religion$TYPE2','Mixed','denomination','mixed'],

     ['religion$TYPE2','Druze','denomination','druze'],

     ['religion$TYPE2','Mahayana','denomination','Mahayana'],
     ['religion$TYPE2','Theravada','denomination','theravada'],
     ['religion$TYPE2','Vajrayana','denomination','vajrayana'],

     ['religion$TYPE2','Protestant','denomination','protestant'],
     ['religion$TYPE2','Orthodox','denomination','orthodox'],
     ['religion$TYPE2','Catholic','denomination','catholic'],

     ['religion$TYPE2','Shamanism','denomination','shamanic'],
     ['religion$TYPE2','Animism','denomination','animist'],
     ['religion$TYPE2','Chinese Folk Religionists','denomination','chinese'],

     ['religion$TYPE2','Vaishnavism','denomination','viashnavism'],
     ['religion$TYPE2','Shaivism','denomination','shaivism'],
     ['religion$TYPE2','Shaktism','denomination','shaktism'],
     ['religion$TYPE2','Smartism','denomination','smartism'],

     ['religion$TYPE2','Conservative','denomination','conservative'],
     ['religion$TYPE2','Reform','denomination','reform'],

     ['religion$TYPE2','Udasi','denomination','udasi'],
     ['religion$TYPE2','Sahajdharis','denomination','sahajdharis'],
     ['religion$TYPE2','Keshadharis','denomination','keshadharis'],

     ['religioni$TYPE','Church','church','church'],
     ['religioni$TYPE','Mosque','building','mosque'],
     ['religioni$TYPE','Mission','building','mission'],
     ['religioni$TYPE','Youth Center','building','youth_center'],
     ['religioni$TYPE','Temple','building','temple'],
     ['religioni$TYPE','Shrine','building','shrine'],
     ['religioni$TYPE','Synagogue','building','synagogue'],
     ['religioni$TYPE','Monastery','amenity','monastery'],

     ['road$TYPE','Bridleway','highway','bridleway'],
     ['road$TYPE','Bus Guideway','highway','bus_guideway'],
     ['road$TYPE','Construction','highway','construction'],
     ['road$TYPE','Cycleway','highway','cycleway'],
     ['road$TYPE','Footway','highway','footway'],
     ['road$TYPE','Ford','ford','yes'],
     ['road$TYPE','Living Street','highway','living street'],
     ['road$TYPE','Motorway Link','highway','motorway_link'],
     ['road$TYPE','Motorway','highway','motorway'],
     ['road$TYPE','Path','highway','path'],
     ['road$TYPE','Pedestrian','highway','pedestrian'],
     ['road$TYPE','Primary Link','highway','primary_link'],
     ['road$TYPE','Primary','highway','primary'],
     ['road$TYPE','Raceway','highway','raceway'],
     ['road$TYPE','Residential','highway','residential'],
     ['road$TYPE','Rest Area','highway','rest_area'],
     ['road$TYPE','Secondary Link','highway','secondary_link'],
     ['road$TYPE','Secondary','highway','secondary'],
     ['road$TYPE','Service','highway','service'],
     ['road$TYPE','Steps','highway','steps'],
     ['road$TYPE','Tertiary Link','highway','tertiary_link'],
     ['road$TYPE','Tertiary','highway','tertiary'],
     ['road$TYPE','Track','highway','track'],
     ['road$TYPE','Trail','highway','trail'],
     ['road$TYPE','Trunk Link','highway','trunk_link'],
     ['road$TYPE','Trunk','highway','trunk'],
     ['road$TYPE','Unclassified','highway','unclassified'],

     ['smugglingl$TYPE','Rail','raw:smugglinglTYPE','rail'],
     ['smugglingl$TYPE','Road','raw:smugglinglTYPE','road'],
     ['smugglingl$TYPE','Shipping Lane','raw:smugglinglTYPE','shipping lane'],
     ['smugglingl$TYPE','Trail','raw:smugglinglTYPE','trail'],

     ['smugglingp$TYPE','Goods','raw:smugglingpTYPE','goods'],
     ['smugglingp$TYPE','Human','raw:smugglingpTYPE','human'],
     ['smugglingp$TYPE','Narcotics/Drugs','raw:smugglingpTYPE','narcotics/drugs'],
     ['smugglingp$TYPE','Oil/Fuel','raw:smugglingpTYPE','oil/fuel'],
     ['smugglingp$TYPE','Poaching','raw:smugglingpTYPE','poaching'],
     ['smugglingp$TYPE','Precious Minerals','raw:smugglingpTYPE','precious minerals'],
     ['smugglingp$TYPE','Smuggling Hub','raw:smugglingpTYPE','smuggling hub'],
     ['smugglingp$TYPE','Weapons','raw:smugglingpTYPE','weapons'],

     ['tourist$TYPE','Botanic Garden','garden:type','botanical'],
     ['tourist$TYPE','Casino','amenity','casino'],
     ['tourist$TYPE','Cultural','raw:touristTYPE','cultural'],
     ['tourist$TYPE','Gallery','tourism','gallery'],
     ['tourist$TYPE','Game Reserve','landuse','game_reserve'],
     ['tourist$TYPE','Historical','raw:touristTYPE','historical'],
     ['tourist$TYPE','Library','raw:touristTYPE','library'],
     ['tourist$TYPE','Memorial','raw:touristTYPE','memorial'],
     ['tourist$TYPE','Monument','raw:touristTYPE','monument'],
     ['tourist$TYPE','Museum','raw:touristTYPE','museum'],
     ['tourist$TYPE','National Park','raw:touristTYPE','national park'],
     ['tourist$TYPE','Other','raw:touristTYPE','other'],
     ['tourist$TYPE','Outdoor','tourism','outdoor'],
     ['tourist$TYPE','Outdoor/Adventure','tourism','outdoor_adventure'],
     ['tourist$TYPE','Spa','amenity','spa'],
     ['tourist$TYPE','Theater','raw:touristTYPE','theater'],
     ['tourist$TYPE','Theme Park','tourism','theme_park'],
     ['tourist$TYPE','Viewpoint','tourism','viewpoint'],
     ['tourist$TYPE','Water Park','leisure','water_park'],
     ['tourist$TYPE','Zoo','tourism','zoo'],


     ['transport$TYPE1','Bus','raw:transportTYPE1','bus'],
     ['transport$TYPE1','Car','raw:transportTYPE1','car'],
     ['transport$TYPE1','Ferry','raw:transportTYPE1','ferry'],
     ['transport$TYPE1','Rail','raw:transportTYPE1','rail'],
     ['transport$TYPE1','Subway','raw:transportTYPE1','subway'],
     ['transport$TYPE1','Taxi','raw:transportTYPE1','taxi'],
     ['transport$TYPE1','Tram','raw:transportTYPE1','tram'],
     ['transport$TYPE1','Trolley','raw:transportTYPE1','trolley'],

     ['transport$TYPE2','Parking Lot','amenity','parking'],
     ['transport$TYPE2','Station','raw:transportTYPE2','station'],
     ['transport$TYPE2','Stop','raw:transportTYPE2','stop'],
     ['transport$TYPE2','Terminal','raw:transportTYPE2','terminal'],
     ['transport$TYPE2','Tunnel','raw:transportTYPE2','tunnel'],
     ['transport$TYPE2','Yard','raw:transportTYPE2','yard'],

     // UNITS - Natural Resources
     ['UNITS','Kilograms per year','YYY','Kilograms per year'],
     ['UNITS','Metric tons per year','YYY','Metric tons per year'],
     ['UNITS','Thousand metric tons per year','YYY','Thousand metric tons per year'],

     // USE - Airport Type
     ['USE','International','aerodrome','international'],
     ['USE','Local','aerodrome','local'],
     ['USE','Regional','aerodrome','regional'],

     ], // End one2one

     // Input Translation Rules:
     // These are only used for IMPORT and get added to the standard one2one rules
     one2oneIn : [
     ['hydrol$TYPE','Inland Water','raw:hydroaTYPE','inland water'],
     ['hydrol$TYPE','Lake','water','lake'],
     ['hydrol$TYPE','Land Subject to Inundation','water','intermittent'],
     ['hydrol$TYPE','River/Stream','waterway','river'],
     ['marine$TYPE','Lighthouse & Beacons','raw:marineTYPE','lighthouses & beacons'],
     ['lodging$TYPE2','Condominiums','raw:lodgingTYPE2','condominium'],

     // This Is Ugly
     ['railwayp$TYPE1','Freight & Passenger','railway:type','freight_and_passenger'],
     ['railwayp$TYPE1','Freight','railway:type','freight'],
     ['railwayp$TYPE1','Passenger','railway:type','passenger'],
     ['railwayl$TYPE2','Freight & Passenger','railway:type','freight_and_passenger'],
     ['railwayl$TYPE2','Freight','railway:type','freight'],
     ['railwayl$TYPE2','Passenger','railway:type','passenger'],

    ], // End one2oneIn

    // One2one translation table for converting "Other" OSM attributes
    // This is for Export only. The values are swapped before use
    one2oneOut : [
     [undefined,undefined,'natural','water'], // to get rid of errors

     ['railwayp$TYPEX','Freight & Passenger','railway:type','freight_and_passenger'],
     ['railwayp$TYPEX','Freight','railway:type','freight'],
     ['railwayp$TYPEX','Passenger','railway:type','passenger'],
   ], // End one2oneOut

    // ##### End of One2One Rules #####

   // Lookup table for layernames.
   // We use this for assigning a short name and validation
    layerNames : {
     'ADMIN0':'admin0',
     'Admin0_Access_To_Services':'d0services',
     'Admin0_Education':'d0education',
     'Admin0_Employment':'d0employment',
     'Admin0_Household_Goods':'d0household',
     'Admin0_Mortality':'d0mortality',
     'Admin0_Population':'d0population',
     'Admin0_Poverty':'d0poverty',
     'ADMIN1':'admin1',
     'Admin1_Access_To_Services':'d1services',
     'Admin1_Education':'d1education',
     'Admin1_Employment':'d1employment',
     'Admin1_Household_Goods':'d1household',
     'Admin1_Mortality':'d1mortality',
     'Admin1_Population':'d1population',
     'Admin1_Poverty':'d1poverty',
     'ADMIN2':'admin2',
     'Admin2_Access_To_Services':'d2services',
     'Admin2_Education':'d2education',
     'Admin2_Employment':'d2employment',
     'Admin2_Household_Goods':'d2household',
     'Admin2_Mortality':'d2mortality',
     'Admin2_Population':'d2population',
     'Admin2_Poverty':'d2poverty',
     'ADMIN3':'admin3',
     'ADMIN4':'admin4',
     'ADMIN5':'admin5',
     'Agricultural_POI':'agriculture',
     'Airfields':'airfield',
     'Border_Crossings':'border',
     'Bridges_Tunnels':'bridge',
     'Commercial_POI':'commercial',
     'Conflict_Points':'conflict',
     'Crime_Data':'crime',
     'Cultural_POI':'cultural',
     'Dams':'dams',
     'Educational_Institutions':'education',
     'Electrical_POI':'electrical',
     'Embassies':'embassy',
     'Ethnicity':'ethnicity',
     'Foreign_Investment_Projects':'foreign',
     'Free_Trade_Zones':'freep',
     'Free_Trade_Zones_Polygons':'freepoly',
     'GNDB':'gndb',
     'Geonames':'geonames',
     'Government_POI':'government',
     'HADR':'hadr',
     'Health_Events':'health',
     'Hydrology_POI':'hydrop',
     'Hydrology_Polygons':'hydroa',
     'Hydrology_Polylines':'hydrol',
     'Internet_Cafes':'internet',
     'Languages':'languages',
     'Libraries':'libraries',
     'Lodging_POI':'lodging',
     'Marine_POI':'marine',
     'Media_Outlets':'media',
     'Medical_Facilities':'medical',
     'Military_Installations':'military',
     'Natural_POI':'natural',
     'Natural_Resources':'resources',
     'Ports':'ports',
     'Power_Plants':'pplant',
     'Prisons':'prison',
     'Protected_Areas':'protected',
     'Public_Security_POI':'public',
     'Public_Transportation_POI':'transport',
     'Railways':'railwayl',
     'Railways_POI':'railwayp',
     'Recreation_POI':'recreation',
     'Refugee_Camps':'refugee',
     'Religion':'religion',
     'Religious_Institutions':'religioni',
     'Roads':'road',
     'Smuggling_Routes':'Smuggle',
     'Smuggling_Routes_Polyline':'Smugglel',
     'Soils':'soils',
     'Tourist_Locations_POI':'tourist',
     } // End layerNames

} // End of hgis20.rules
