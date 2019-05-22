<template>
  <div>
    <div class="col-12">
        <div class="centerBlock">
            <div class="row">
               <div class="col">
                    <img src="./assets/img/chromely.png" class="img-rounded" alt="Chromely Logo" width="120" height="120" style='margin-top: 20px;' />
               </div>
               <div class="col">
                    <img src="./assets/img/logo.png" class="img-rounded" alt="Vue Logo" width="120" height="120" style='margin-top: 20px;' />
               </div>
            </div>
            <div class="row centerBlock">
                <span class="text-primary text-center"><h2>demo panel</h2></span>
            </div>
        </div>
    </div>

    <div class="col-12">
      <div>
        <router-link to="/"> <button id="buttonDemoRun" type="button" class="btn btn-link" style='margin: 5px;'>Back</button></router-link>
      </div>
      <div class="centerBlock">
        <button v-b-modal.boundJsObjectModal type="button" class="btn btn-light" style='margin: 5px;'>RegisterAsyncJsObject Demo</button>
        <a href="https://github.com/mattkol/Chromely" class="btn btn-default" role="button" style='margin: 5px;'>more info</a>
      </div>
    </div>

    <br>

    <div id="infoPanel" class="col-12 centerBlock">

      <div>
        <div class="card-header card bg-primary text-white">Chromely Main objective</div>
        <div class="card-body"> {{info.Objective}}  </div>
      </div>
      <br>

      <div>
        <div class="card-header card bg-primary text-white">Platforms</div>
        <div class="card-body"> {{info.Platform}} </div>
      </div>
      <br>

      <div>
        <div class="card-header card bg-primary text-white">Current CefSharp/Chromium Version</div>
        <div class="card-body"> {{info.Version}} </div>
      </div>
      <br>

    </div>

    <!-- Bounds Object Modal -->
    <b-modal id="boundJsObjectModal" size="lg" title=".NET/JavaScript Integration (RegisterAsyncJsObject) Demo">
        <b-tabs pills>
            <b-tab title="Get1" active>
              <div class="row">
                <div class="col-12">
                    Route Path:&ensp;/demo/movies &ensp; (Restful Service in Local Assembly)&ensp;<button type="button" class="btn btn-primary btn-sm" v-on:click="boundObjectGet1Click()">Run</button>
                </div>
                <br><br>
                <div class="col-12">
                    <div class='table-responsive'>
                        <table id="boundObjectResult1" class='table'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Year</th>
                                    <th>Votes</th>
                                    <th>Rating</th>
                                    <th>Date</th>
                                    <th>RestfulAssembly</th>
                                </tr>
                            </thead>
                            <tbody tr v-for="item in boundObjectGet1Result">
                                <tr>
                                    <th>{{ item.Id }}</th>
                                    <th>{{ item.Title }}</th>
                                    <th>{{ item.Year }}</th>
                                    <th>{{ item.Votes }}</th>
                                    <th>{{ item.Rating }}</th>
                                    <th>{{ item.Date }}</th>
                                    <th>{{ item.RestfulAssembly }}</th>
                                </tr>
                            </tbody>
                       </table>
                    </div>
                </div>
              </div>
            </b-tab>
            <b-tab title="Get2">
              <div class="row">
                <div class="col-12">
                    Route Path:&ensp;/external/movies &ensp; (Restful Service in External Assembly)&ensp;<button type="button" class="btn btn-primary btn-sm" v-on:click="boundObjectGet2Click()">Run</button>
                </div>
                <br><br>
                <div class="col-12">
                    <div class='table-responsive'>
                        <table id="boundObjectResult1" class='table'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Year</th>
                                    <th>Votes</th>
                                    <th>Rating</th>
                                    <th>Date</th>
                                    <th>RestfulAssembly</th>
                                </tr>
                            </thead>
                           <tbody tr v-for="item in boundObjectGet2Result">
                                <tr>
                                    <th>{{ item.Id }}</th>
                                    <th>{{ item.Title }}</th>
                                    <th>{{ item.Year }}</th>
                                    <th>{{ item.Votes }}</th>
                                    <th>{{ item.Rating }}</th>
                                    <th>{{ item.Date }}</th>
                                    <th>{{ item.RestfulAssembly }}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
              </div>
            </b-tab>
            <b-tab title="Post">
               <div class="row">
                  <div class="col-12">
                        Route Path:&ensp;/demo/savemovies&ensp;(Restful Service in Local Assembly)&ensp;<button type="button" class="btn btn-primary btn-sm" v-on:click="boundObjectPostClick()">Run</button>
                    </div>
                    <br><br>
                    <div class="col-12">
                        <div>{{ boundObjectPostResult }}</div>
                    </div>
                </div>
            </b-tab>
        </b-tabs>

    </b-modal>
    <!-- End Bounds Object Modal -->

  </div>
</template>

<script src="./Demo.js"></script>