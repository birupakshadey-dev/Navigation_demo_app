// src/navigation/linking.js
export default {
  prefixes: ['myapp://', 'https://myapp.example'],
  config: {
    screens: {
      MainTabs: {
        screens: {
          HomeTab: {
            screens: {
              HomeFeed: '',
              Post: 'post/:postId',
              Comments: 'post/:postId/comments',
            },
          },
          SearchTab: {
            screens: {
              Search: 'search',
            },
          },
          ReelsTab: {
            screens: {
              Reels: 'reels',
            },
          },
          MessagesTab: {
            screens: {
              Inbox: 'inbox',
              Chat: 'chat/:chatId',
            },
          },
          ProfileTab: {
            screens: {
              Profile: 'u/:username',
              Post: 'post/:postId',
            },
          },
        },
      },
      CreatePostModal: 'create',
    },
  },
};
