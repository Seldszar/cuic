/**
 * A string pattern.
 */
export type StringPattern = string | string[];

/**
 * A number pattern.
 */
export type NumberPattern = number | number[];

/**
 * A user.
 */
export interface User {
  /**
   * Is the user verified?
   */
  verified: boolean;

  /**
   * The profile picture.
   */
  profilePicture: string;

  /**
   * The display name.
   */
  displayName: string;

  /**
   * The handle.
   */
  handle: string;
}

/**
 * A playlist.
 */
export interface Playlist {
  /**
   * The user.
   */
  user: User;

  /**
   * The text.
   */
  text: StringPattern;

  /**
   * The retweets count.
   */
  retweets: NumberPattern;

  /**
   * The likes count.
   */
  likes: NumberPattern;

  /**
   * The replies count.
   */
  replies: NumberPattern;
}

/**
 * Application settings.
 */
export interface Settings {
  /**
   * The delay, in seconds, between each tweet.
   */
  delay: NumberPattern;

  /**
   * The duration, in seconds, of each tweet.
   */
  duration: number;

  /**
   * The playlists.
   */
  playlists: Playlist[];
}

declare global {
  interface Window {
    settings: Settings;
  }
}
