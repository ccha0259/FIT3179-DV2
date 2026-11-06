"use strict";

// Access a rendered chart later with visualizationViews["container-id"].
var visualizationViews = {};

// 1. Dentist availability choropleth, 2014
var vg_1 = "choropleth_dental_prac.json";

vegaEmbed("#dentists-2014", vg_1, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false
}).then(function (result) {
  // result.view is the rendered Vega View instance.
  visualizationViews["dentists-2014"] = result.view;
}).catch(console.error);

// 2. Dentist availability choropleth, 2024
var vg_2 = "specs/workforce_choropleth.vl.json";

vegaEmbed("#dentists-2024", vg_2, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false
}).then(function (result) {
  // result.view is the rendered Vega View instance.
  visualizationViews["dentists-2024"] = result.view;
}).catch(console.error);

// 3. Employed-dentist cartogram, 2024
var vg_3 = "specs/dentist_cartogram.vg.json";

vegaEmbed("#dentist-cartogram", vg_3, {
  mode: "vega",
  renderer: "svg",
  actions: false
}).then(function (result) {
  // result.view is the rendered Vega View instance.
  visualizationViews["dentist-cartogram"] = result.view;
}).catch(console.error);

// 4. Preventable dental hospitalisations proportional symbol map, 2014-15
var vg_4 = "specs/dental_hospitalisations_2014_15.vl.json";

vegaEmbed("#hospitalisations-2014", vg_4, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false
}).then(function (result) {
  // result.view is the rendered Vega View instance.
  visualizationViews["hospitalisations-2014"] = result.view;
}).catch(console.error);

// 5. Preventable dental hospitalisations proportional symbol map, 2024-25
var vg_5 = "specs/hospital_symbol_map.vl.json";

vegaEmbed("#hospitalisations-2024", vg_5, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false
}).then(function (result) {
  // result.view is the rendered Vega View instance.
  visualizationViews["hospitalisations-2024"] = result.view;
}).catch(console.error);

// 6. Dental hospitalisation heatmap by age and year, 2016-17 to 2024-25
var vg_6 = "specs/dental_hospitalisation_heatmap.vl.json";

vegaEmbed("#hospitalisation-heatmap", vg_6, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false
}).then(function (result) {
  // result.view is the rendered Vega View instance.
  visualizationViews["hospitalisation-heatmap"] = result.view;
}).catch(console.error);

// 7. Hospital dental procedure treemap, 2024-25
var vg_7 = "specs/dental_procedures_treemap.vg.json";

vegaEmbed("#dental-treemap", vg_7, {
  mode: "vega",
  renderer: "svg",
  actions: false
}).then(function (result) {
  // result.view is the rendered Vega View instance.
  visualizationViews["dental-treemap"] = result.view;
}).catch(console.error);

// 8. CDBS service-mix donut map, 2024
var vg_8 = "specs/cdbs_donut_map.vl.json";

vegaEmbed("#cdbs-donut-map", vg_8, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false
}).then(function (result) {
  // result.view is the rendered Vega View instance.
  visualizationViews["cdbs-donut-map"] = result.view;
}).catch(console.error);

// 9. Preventive versus restorative CDBS services scatterplot, 2024
var vg_9 = "specs/cdbs_preventive_restorative_scatter.vl.json";

vegaEmbed("#cdbs-scatterplot", vg_9, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false
}).then(function (result) {
  // result.view is the rendered Vega View instance.
  visualizationViews["cdbs-scatterplot"] = result.view;
}).catch(console.error);

// 10. CDBS service breakdown Sankey diagram, 2024
var vg_10 = "specs/cdbs_sankey.vg.json";

vegaEmbed("#cdbs-sankey", vg_10, {
  mode: "vega",
  renderer: "svg",
  actions: false
}).then(function (result) {
  // result.view is the rendered Vega View instance.
  visualizationViews["cdbs-sankey"] = result.view;
}).catch(console.error);

// 11. ABS dental access barriers parallel coordinates plot, 2024-25
var vg_11 = "specs/abs_dental_access_parallel.vl.json";

vegaEmbed("#dental-access", vg_11, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false
}).then(function (result) {
  // result.view is the rendered Vega View instance.
  visualizationViews["dental-access"] = result.view;
}).catch(console.error);

// 12. ABS dental visit frequency stacked bar chart, 2024-25
var vg_12 = "specs/abs_dental_visit_frequency.vl.json";

vegaEmbed("#dental-visit-frequency", vg_12, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false
}).then(function (result) {
  // result.view is the rendered Vega View instance.
  visualizationViews["dental-visit-frequency"] = result.view;
}).catch(console.error);
