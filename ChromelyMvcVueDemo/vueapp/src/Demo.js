var chromelyService = require('./services/chromely.service');

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
            chromelyService.get('/demo/getmovies', null)
                .then((res) => {
                    this.boundObjectGet1Result = res;
                });
        },

        boundObjectGet2Click: function () {
            chromelyService.get('/external/getmovies', null)
                .then((res) => {
                    this.boundObjectGet2Result = res;
                });
        },

        boundObjectPostClick: function () {
            var moviesJson = [
                { id: 1, title: "The Shawshank Redemption", year: 1994, votes: 678790, rating: 9.2 },
                { id: 2, title: "The Godfather", year: 1972, votes: 511495, rating: 9.2 },
                { id: 3, title: "The Godfather: Part II", year: 1974, votes: 319352, rating: 9.0 },
                { id: 4, title: "The Good, the Bad and the Ugly", year: 1966, votes: 213030, rating: 8.9 },
                { id: 5, title: "My Fair Lady", year: 1964, votes: 533848, rating: 8.9 },
                { id: 6, title: "12 Angry Men", year: 1957, votes: 164558, rating: 8.9 }
            ];

            chromelyService.post('/demo/savemovies', null, moviesJson).then((res) => {
                this.boundObjectPostResult = res;
            });
        },

        /* End - Event Handling */
    },
    beforeMount() {
        chromelyService.get('/info', null).then((res) => {
            this.info = res;
        });
    }
}