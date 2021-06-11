/**
 * A string pattern.
 * @typedef {(string|string[])} StringPattern
 */

/**
 * A number pattern.
 * @typedef {(number|number[])} NumberPattern
 */

/**
 * A user.
 * @typedef {Object} User
 * @property {boolean} verified
 * @property {string} profilePicture
 * @property {string} displayName
 * @property {string} handle
 */

/**
 * A playlist.
 * @typedef {Object} Playlist
 * @property {(User|User[])} user
 * @property {StringPattern} text
 * @property {NumberPattern} retweets
 * @property {NumberPattern} likes
 * @property {NumberPattern} replies
 */

/**
 * Application settings.
 * @type {Object}
 */
window.settings = {
  /**
   * The delay, in seconds, between each tweet.
   * @type {NumberPattern}
   */
  delay: 2,

  /**
   * The duration, in seconds, of each tweet.
   * @type {Number}
   */
  duration: 8,

  /**
   * The playlists.
   * @type {Playlist[]}
   */
  playlists: [
    {
      user: [
        {
          verified: true,
          profilePicture: "assets/5b09a9f1-f9b3-4398-b521-18de088ff463.jpg",
          displayName: "Lorem",
          handle: "lorem",
        },
      ],
      text: "Phasellus at massa ac leo lacinia varius. Integer ut elit purus.",
      retweets: 123456,
      likes: 1234,
      replies: 6985,
    },
    {
      user: [
        {
          profilePicture: "assets/9c556abd-a5b3-4be4-88b5-4803b4058daa.jpg",
          displayName: "Ipsum",
          handle: "ipsum",
        },
      ],
      text: ["Lorem ipsum dolor sit amet", "Sed commodo sagittis tincidunt."],
      retweets: [0, 69],
      likes: [0, 666],
    },
  ],
};
