<template>
  <div class="news-wrap p-2.5 border-gray-500 border-4 rounded w-1/3">
    <p>News</p>
    <div v-for="news in newsList" :key="news.id" class="flex m-1">
      <img :src="news.imgUrl" />
      <div class="">
        <h2 class="font-medium">{{ news.title }}</h2>
        <p class="truncate news-content">{{ news.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNews',
  data() {
    return {
      newsList: [
        {
          imgUrl: 'https://picsum.photos/50',
          id: '1',
          title: 'News title',
          content:
            'lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          imgUrl: 'https://picsum.photos/50',
          id: '1',
          title: 'News title',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          imgUrl: 'https://picsum.photos/50',
          id: '1',
          title: 'News title',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ],
    }
  },
}
</script>
<style scoped>
.news-content {
  max-width: 200px !important;
}
</style>
