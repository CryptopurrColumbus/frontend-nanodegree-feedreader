/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('URL defined', function() {
            for(var feed of allFeeds) {
                expect(feed).toBeDefined();
                expect(feed.url).toBeDefined();
                expect(feed.url).toBeTruthy();
            }
        })

        it('name defined', function() {
            for(var feed of allFeeds) {
                expect(feed).toBeDefined();
                expect(feed.name).toBeDefined();
                expect(feed.name).toBeTruthy();
            }
        })
    });


    describe('The menu', function() {

        it('is hidden by default', function() {
            expect($('.menu-hidden').length).toBe(1)
        })


        it('visibility toggles when clicked', function() {
            expect($('.menu-hidden').length).toBe(1)
            var menuIcon = $('.menu-icon-link')
            menuIcon.trigger('click')
            expect($('.menu-hidden').length).toBe(0)
            // Put back to being hidden
            menuIcon.trigger('click')
            expect($('.menu-hidden').length).toBe(1)
        })

    });


    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done)
        });

        it('has been loaded', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        })

    });


    describe('New Feed Selection', function() {

        var firstEntry = '';
        var secondEntry = '';
        beforeEach(function(done) {
            loadFeed(0, function(done) {
                var firstEntry = $('.feed').html()
            })
            loadFeed(1, done)
        });

        it('content actually changes', function() {
            var secondEntry = $('.feed').html();
            expect(firstEntry).not.toBe(secondEntry)
        })

    });

}());
