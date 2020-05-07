"use strict";
/* global instantsearch */

const search = instantsearch({
  appId: "latency",
  apiKey: "6be0576ff61c053d5f9a3225e2a90f76",
  indexName: "instant_search",
  routing: true,
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#q",
    placeholder: "Search a product",
  })
);

search.addWidget(
  instantsearch.widgets.stats({
    container: "#stats",
  })
);

search.on("render", function () {
  $(".product-picture img").addClass("transparent");
  $(".product-picture img")
    .one("load", function () {
      $(this).removeClass("transparent");
    })
    .each(function () {
      if (this.complete) $(this).load();
    });
});

let noResultsTemplate =
  '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';

let menuTemplate =
  '<a href="javascript:void(0);" class="facet-item {{#isRefined}}active{{/isRefined}}"><span class="facet-name"><i class="fa fa-angle-right"></i> {{label}}</span class="facet-name"></a>';

let facetTemplateCheckbox =
  '<a href="javascript:void(0);" class="facet-item">' +
  '<input type="checkbox" class="{{cssClasses.checkbox}} filled-in" value="{{label}}" {{#isRefined}}checked{{/isRefined}} />{{label}}' +
  '<span class="facet-count">({{count}})</span>' +
  "</a>";

let facetTemplateColors =
  '<a href="javascript:void(0);" data-facet-value="{{label}}" class="facet-color {{#isRefined}}checked{{/isRefined}}"></a>';

search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    hitsPerPage: 16,
    templates: {
      empty: noResultsTemplate,
      //item: hitTemplate,
      allItems: `<div class="row product-wrapper">
                  {{#hits}}
                      <div class="col s12 m6 l4 mb-4">
                        <div class="product p-4"> 
                          <div class="product-picture-wrapper mb-4">
                              <div class="product-picture">
                                <img src="{{image}}" alt="product-img"/>
                              </div>
                              <div class="overlay-wrap pos-relative"></div>
                          </div>
                          <div class="product-desc-wrapper">
                            <div class="price-type-wrap pb-3 mb-3">    
                              <div class="product-price mb-2">{{price}}</div>
                              <div class="product-type">{{{_highlightResult.type.value}}}</div>
                            </div>
                            <!--<div class="product-name">{{{_highlightResult.name.value}}}</div>-->
                            <div class="justify-content-between d-flex align-items-center">
                              <a href="javascript:void(0)" class="primary--text fs-14">Show details</a>
                              <a href="javascript:;">
                                <i aria-hidden="true" class="v-icon grey--text material-icons theme--light">more_horiz</i>
                              </a>
                            </div>
                          </div> 
                        </div>
                      </div>
                  {{/hits}}
              </div>`,
    },
    transformData: function (hit) {
      hit.stars = [];
      for (var i = 1; i <= 5; ++i) {
        hit.stars.push(i <= hit.rating);
      }
      return hit;
    },
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: "#pagination",
    cssClasses: {
      active: "active",
    },
    labels: {
      previous: '<i class="fa fa-angle-left fa-2x"></i> Previous page',
      next: 'Next page <i class="fa fa-angle-right fa-2x"></i>',
    },
    showFirstLast: false,
  })
);

search.addWidget(
  instantsearch.widgets.hierarchicalMenu({
    container: "#categories",
    attributes: [
      "hierarchicalCategories.lvl0",
      "hierarchicalCategories.lvl1",
      "hierarchicalCategories.lvl2",
    ],
    sortBy: ["name:asc"],
    templates: {
      item: menuTemplate,
    },
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#types",
    attributeName: "type",
    operator: "or",
    limit: 5,
    templates: {
      item: facetTemplateCheckbox,
      header:
        '<div class="facet-title mb-4">Category</div class="facet-title">',
    },
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#brands",
    attributeName: "brand",
    operator: "or",
    limit: 5,
    searchForFacetValues: true,
    templates: {
      item: facetTemplateCheckbox,
      header: '<div class="facet-title mb-4">Brand</div class="facet-title">',
    },
  })
);

search.addWidget(
  instantsearch.widgets.starRating({
    container: "#rating",
    attributeName: "rating",
    templates: {
      header: '<div class="facet-title mb-4">Rating</div class="facet-title">',
    },
  })
);

search.addWidget(
  instantsearch.widgets.priceRanges({
    container: "#prices",
    attributeName: "price",
    cssClasses: {
      list: "nav nav-list",
      count: "badge pull-right",
      active: "active",
    },
    templates: {
      header: '<div class="facet-title mb-4">Prices</div class="facet-title">',
    },
  })
);

search.addWidget(
  instantsearch.widgets.sortBySelector({
    container: "#sort-by-selector",
    indices: [
      { name: "instant_search", label: "Featured" },
      { name: "instant_search_price_asc", label: "Price asc." },
      { name: "instant_search_price_desc", label: "Price desc." },
    ],
    label: "sort by",
  })
);

search.addWidget(
  instantsearch.widgets.clearAll({
    container: "#clear-all",
    templates: {
      link: '<i class="fa fa-eraser"></i> Clear all filters',
    },
    cssClasses: {
      root: "btn btn-block btn-default",
    },
    autoHideContainer: true,
  })
);

search.start();
