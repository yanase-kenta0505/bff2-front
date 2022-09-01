<template>
  <div v-if="fetching">
    Loading...
  </div>
  <div v-else-if="error">
    Oh no... {{error}}
  </div>
  <div v-else>
    <ul v-if="data">
      <li v-for="post in data.posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import { useQuery } from '@urql/vue';

export default {
  setup() {
    const result = useQuery({
      query: `
        {
          posts {
            id
            title
          }
        }
      `
    });

    console.log(result.data)
    return {
      fetching: result.fetching,
      data: result.data,
      error: result.error,
    };
    
  }
};
</script>