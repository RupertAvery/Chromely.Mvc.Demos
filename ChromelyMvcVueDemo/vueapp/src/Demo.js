var boundObjectService = require('./services/registered-js-object.service');

export default {
    data() {
        return {
            info: {},
            boundObjectGet1Result: [],
            boundObjectGet2Result: [],
            boundObjectPostResult: 'Post request not ran or no result recieved.'
        }
    },
    methods: {

        /* Start -  Event Handling */

        boundObjectGet1Click: function () {
            boundObjectService.get('/demo/getmovies', null)
                .then((res) => {
                    this.boundObjectGet1Result = res;
                });
        },

        boundObjectGet2Click: function () {
            boundObjectService.get('/external/getmovies', null)
                .then((res) => {
                    this.boundObjectGet2Result = res;
                });
        },

        boundObjectPostClick: function () {
            var moviesJson = [
                { Id: 1, Title: "The Shawshank Redemption", Year: 1994, Votes: 678790, Rating: 9.2 },
                { Id: 2, Title: "The Godfather", Year: 1972, votes: 511495, Rating: 9.2 },
                { Id: 3, Title: "The Godfather: Part II", Year: 1974, Votes: 319352, Rating: 9.0 },
                { Id: 4, Title: "The Good, the Bad and the Ugly", Year: 1966, Votes: 213030, Rating: 8.9 },
                { Id: 5, Title: "My Fair Lady", Year: 1964, Votes: 533848, Rating: 8.9 },
                { Id: 6, Title: "12 Angry Men", Year: 1957, Votes: 164558, Rating: 8.9 }
            ];

            boundObjectService.post('/demo/savemovies', null, moviesJson).then((res) => {
                this.boundObjectPostResult = res;
            });
        },

        /* End - Event Handling */
    },
    beforeMount() {
        boundObjectService.get('/info', null).then((res) => {
            this.info = res;
        });
    }
}