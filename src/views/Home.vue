<template>
<Navbar class="has-shadow" />

<div class="columns mx-0 my-1">
  <!-- Left -->
  <div class="column is-3 is-hidden-mobile">
    <Top5 class="box" />
  </div>

  <!-- Center -->
  <div class="column is-6">
    <PostCreate class="box" />
    <Post v-for="i in [1, 2, 3, 4, 5, 6]" :key="i" class="box" />
  </div>

  <!-- Right -->
  <div class="column is-3 is-hidden-mobile">
    <div class="box">
      <div class="level">
        <div class="level-item">
          <div class="is-flex is-flex-direction-column is-align-items-center">
            <figure class="image is-128x128">
              <img class="is-rounded" src="https://placekitten.com/128/128">
            </figure>

            <br>

            <strong class="title is-3">Roberta</strong>
            <span class="title is-5 has-text-grey">Investidora</span>
          </div>
        </div>
      </div>

      <hr>

      <div class="level">
        <div class="level-left">
          <strong class="level-item has-text-grey-dark">
            Sugestão de investidores
          </strong>
        </div>
        <div class="level-right">
          <span class="level-item has-text-primary">
            ver todos
          </span>
        </div>
      </div>

      <UserIcon username="Banamna" label="Segue aqui">
        <button class="button is-primary is-light">Seguir</button>
      </UserIcon>
      <UserIcon username="Maurício" label="Pegaki">
        <button class="button is-primary is-light">Seguir</button>
      </UserIcon>
      <UserIcon username="Bruna" label="Olá Marilene">
        <button class="button is-primary is-light">Seguir</button>
      </UserIcon>
    </div>
  </div>
</div>
</template>

<script>
import Post from '@/comps/Post'
import Navbar from '@/comps/navbar/Navbar'
import UserIcon from '@/comps/UserIcon'
import PostCreate from '@/comps/PostCreate'
import Top5 from '../comps/Top5'

export default {
  components: {
    Top5,
    Post,
    Navbar,
    UserIcon,
    PostCreate
  }
}
</script>
