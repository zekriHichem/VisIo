'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">dashboard documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a5621817be502e81686519bf44add469"' : 'data-target="#xs-components-links-module-AppModule-a5621817be502e81686519bf44add469"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a5621817be502e81686519bf44add469"' :
                                            'id="xs-components-links-module-AppModule-a5621817be502e81686519bf44add469"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LinechartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinechartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScatterplotComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScatterplotComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DefaultModule.html" data-type="entity-link">DefaultModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DefaultModule-e599d1278258bf3020556c07058fb4aa"' : 'data-target="#xs-components-links-module-DefaultModule-e599d1278258bf3020556c07058fb4aa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DefaultModule-e599d1278258bf3020556c07058fb4aa"' :
                                            'id="xs-components-links-module-DefaultModule-e599d1278258bf3020556c07058fb4aa"' }>
                                            <li class="link">
                                                <a href="components/AddAlgoModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddAlgoModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddDatabaseModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddDatabaseModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddSessionModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddSessionModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlgorithmComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlgorithmComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatabaseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatabaseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatabasesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatabasesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DefaultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadDataComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SparkContextComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SparkContextComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DefaultModule-e599d1278258bf3020556c07058fb4aa"' : 'data-target="#xs-injectables-links-module-DefaultModule-e599d1278258bf3020556c07058fb4aa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DefaultModule-e599d1278258bf3020556c07058fb4aa"' :
                                        'id="xs-injectables-links-module-DefaultModule-e599d1278258bf3020556c07058fb4aa"' }>
                                        <li class="link">
                                            <a href="injectables/DashboardService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DashboardService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-019052acfa4eeef7a52cc3c081d5d9e7"' : 'data-target="#xs-components-links-module-SharedModule-019052acfa4eeef7a52cc3c081d5d9e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-019052acfa4eeef7a52cc3c081d5d9e7"' :
                                            'id="xs-components-links-module-SharedModule-019052acfa4eeef7a52cc3c081d5d9e7"' }>
                                            <li class="link">
                                                <a href="components/AreaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DftComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DftComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DftcardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DftcardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DftsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DftsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ParamCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParamCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PcaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PcaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PieComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PieComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SMACardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SMACardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScatterchartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScatterchartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SmaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SmaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WmaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WmaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WmacardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WmacardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VisualscriptingModule.html" data-type="entity-link">VisualscriptingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VisualscriptingModule-a456dcce3a2a75cd90c1d299b11df0fa"' : 'data-target="#xs-components-links-module-VisualscriptingModule-a456dcce3a2a75cd90c1d299b11df0fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VisualscriptingModule-a456dcce3a2a75cd90c1d299b11df0fa"' :
                                            'id="xs-components-links-module-VisualscriptingModule-a456dcce3a2a75cd90c1d299b11df0fa"' }>
                                            <li class="link">
                                                <a href="components/CheckNgComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CheckNgComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NumberNgComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NumberNgComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RunStatusNgComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RunStatusNgComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RunbtnComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RunbtnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectNgComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectNgComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VisualscriptingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VisualscriptingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/LinechartComponent-1.html" data-type="entity-link">LinechartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LinechartComponent-2.html" data-type="entity-link">LinechartComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BddComponent.html" data-type="entity-link">BddComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/BtnrunControls.html" data-type="entity-link">BtnrunControls</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckControls.html" data-type="entity-link">CheckControls</a>
                            </li>
                            <li class="link">
                                <a href="classes/DFTComponent.html" data-type="entity-link">DFTComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/LinechartComponent.html" data-type="entity-link">LinechartComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/NumControl.html" data-type="entity-link">NumControl</a>
                            </li>
                            <li class="link">
                                <a href="classes/PcaComponent.html" data-type="entity-link">PcaComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/ScatterplotComponent.html" data-type="entity-link">ScatterplotComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectControls.html" data-type="entity-link">SelectControls</a>
                            </li>
                            <li class="link">
                                <a href="classes/StatusControls.html" data-type="entity-link">StatusControls</a>
                            </li>
                            <li class="link">
                                <a href="classes/UmapComponent.html" data-type="entity-link">UmapComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DashboardService.html" data-type="entity-link">DashboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AddSession.html" data-type="entity-link">AddSession</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Algo.html" data-type="entity-link">Algo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BodyPost.html" data-type="entity-link">BodyPost</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Database.html" data-type="entity-link">Database</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseGroup.html" data-type="entity-link">DatabaseGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseRete.html" data-type="entity-link">DatabaseRete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabasesTable.html" data-type="entity-link">DatabasesTable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DbStatus.html" data-type="entity-link">DbStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link">DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InputAlgo.html" data-type="entity-link">InputAlgo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeriodicElement.html" data-type="entity-link">PeriodicElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseAlgo.html" data-type="entity-link">ResponseAlgo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseServer.html" data-type="entity-link">ResponseServer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServerStatus.html" data-type="entity-link">ServerStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SessionSpark.html" data-type="entity-link">SessionSpark</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Simple.html" data-type="entity-link">Simple</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Simple-1.html" data-type="entity-link">Simple</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableData.html" data-type="entity-link">TableData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});