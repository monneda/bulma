<template>
  <cartera      v-if="icon === 'cartera'"      />
  <cartera-404  v-if="icon === 'cartera-404'"  />
  <cartera-fill v-if="icon === 'cartera-fill'" />
  <comment      v-if="icon === 'comment'"      />
  <compass      v-if="icon === 'compass'"      />
  <graph-line   v-if="icon === 'graph-line'"   />
  <graph-pie    v-if="icon === 'graph-pie'"    />
  <home         v-if="icon === 'home'"         />
  <line-up      v-if="icon === 'line-up'"      />
  <lock         v-if="icon === 'lock'"         />
  <newspaper    v-if="icon === 'newspaper'"    />
  <users        v-if="icon === 'users'"        />
  <trophy       v-if="icon === 'trophy'"        />
</template>

<script>
import Cartera from '@/ui/icons/Cartera'
import Cartera404 from '@/ui/icons/Cartera404'
import CarteraFill from '@/ui/icons/CarteraFill'
import Comment from '@/ui/icons/Comment'
import Compass from '@/ui/icons/Compass'
import GraphLine from '@/ui/icons/GraphLine'
import GraphPie from '@/ui/icons/GraphPie'
import Home from '@/ui/icons/Home'
import LineUp from '@/ui/icons/LineUp'
import Lock from '@/ui/icons/Lock'
import Newspaper from '@/ui/icons/Newspaper'
import Users from '@/ui/icons/Users'
import Trophy from '@/ui/icons/Trophy'

export default {
  name: 'CIcon',

  components: {
    Cartera,
    Cartera404,
    CarteraFill,
    Comment,
    Compass,
    GraphLine,
    GraphPie,
    Home,
    LineUp,
    Lock,
    Newspaper,
    Users,
    Trophy
  },

  props: {
    icon: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: '1rem'
    },
    width: {
      type: String,
      default: '1rem'
    }
  }
}
</script>
