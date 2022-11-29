export const headerComponent = () => `
<nav class="navbar navbar-expand-lg grow-1 fixed-top">
<a class="navbar-brand mx-4 mt-lg-0" href="#">
    <img src="images/logo-mini.png" alt="">
    <!-- <span>Encante Vin</span> -->
</a>

<button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#barraNav">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="barraNav">
    <ul class="navbar-nav mx-auto mb-2">
        <!-- mb-2 -->
        <li class="nav-item dropdown dropdown-hover position-static">
            <a class="nav-link dropdown-toggle hidden-arrow" href="#vinhos" id="navbarDropdown" role="button"
                data-mdb-toggle="dropdown" aria-expanded="false">Vinhos</a>
            <!-- Dropdown menu -->
            <div class="dropdown-menu w-100 mt-0" aria-labelledby="navbarDropdown">
                <!--  style="border-top-left-radius: 0; border-top-right-radius: 0 -->
                <div class="container">
                    <div class="row my-4">
                        <div class="col-md-6 col-lg-3 mb-md-0 ">
                            <!--mb-3 mb-lg-0 -->
                            <div class="list-group list-group-flush">
                                <h5>
                                    <img src="images/vinho.png" alt="" class="pe-1">

                                    Por tipo
                                </h5>
                                <a href="" class="list-group-item list-group-item-action">Tintos</a>
                                <a href="" class="list-group-item list-group-item-action">Brancos</a>
                                <a href="" class="list-group-item list-group-item-action">Espumantes</a>
                                <a href="" class="list-group-item list-group-item-action">Frisantes</a>
                                <a href="" class="list-group-item list-group-item-action">Rosés</a>
                                <a href="" class="list-group-item list-group-item-action">Licorosos</a>

                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                            <div class="list-group list-group-flush">
                                <h5>
                                    <img src="images/grapes.png" alt="" class="pe-1">
                                    <!-- <i class="text-info fas fa-thin fa-grapes pe-1"></i> -->
                                    Por Uva
                                </h5>
                                <a href="" class="list-group-item ">Cabernet Sauvignon</a>
                                <a href="" class="list-group-item ">Carignan</a>
                                <a href="" class="list-group-item list-group-item-action">Chardonnay</a>
                                <a href="" class="list-group-item list-group-item-action">Malbec</a>
                                <a href="" class="list-group-item list-group-item-action">Merlot</a>
                                <a href="" class="list-group-item list-group-item-action">Sauvignon Blanc</a>
                                <a href="" class="list-group-item list-group-item-action">Tanat</a>

                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                            <div class="list-group list-group-flush">
                                <h5>
                                    <img src="images/barril.png" alt="" class="pe-1">
                                    Por Safra
                                </h5>
                                <a href="" class="list-group-item list-group-item-action">2016</a>
                                <a href="" class="list-group-item list-group-item-action">2017</a>
                                <a href="" class="list-group-item list-group-item-action">2018</a>
                                <a href="" class="list-group-item list-group-item-action">2019</a>
                                <a href="" class="list-group-item list-group-item-action">2021</a>
                                <a href="" class="list-group-item list-group-item-action">2022</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="list-group list-group-flush">
                                <h5>
                                    <img src="images/paises.png" alt="" class="pe-1">
                                    Por País
                                </h5>
                                <a href="" class="list-group-item list-group-item-action">Argentina</a>
                                <a href="" class="list-group-item list-group-item-action">Brasil</a>
                                <a href="" class="list-group-item list-group-item-action">Chile</a>
                                <a href="" class="list-group-item list-group-item-action">Espanha</a>
                                <a href="" class="list-group-item list-group-item-action">França</a>
                                <a href="" class="list-group-item list-group-item-action">Itália</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <!-- <li class="nav-item">
            <a class="nav-link" href="#">
                <i class="fas fa-search"></i> Nossa Historia
            </a>
        </li> -->
        <li class="nav-item">
            <a class="nav-link" href="#decanter">Decanter</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#tacas">Taças
                <!-- <i class="fas fa-wine"></i> -->
            </a>
        </li>
    </ul>

    <div class="d-flex align-items-center mx-4">
        <a class="text-reset me-4" href="#">
            <i class="fas fa-search"></i>
        </a>

        <div class="dropdown">
            <a class="text-reset me-4 dropdown-toggle hidden-arrow" href="#" id="#modal-cadastro">
                <i class="fas fa-user"></i>
            </a>
        </div>

        <div class="dropdown">
            <a class="text-reset me-4" href="#">
                <i class="fas fa-shopping-cart"></i>
                <span class="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
        </div>
    </div>
</div>
</nav>
`;