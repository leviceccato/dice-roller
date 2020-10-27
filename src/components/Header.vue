<template>

  <header
    class="Header"
    id="header">

    <Logo/>

    <nav class="Nav">

      <button
        class="Nav-cover"
        :class="{ hidden: !isNavOpen }"
        @click="toggleNav">
        <span class="VisuallyHidden">
          Close navigation
        </span>
      </button>

      <button
        class="Nav-toggle"
        @click="toggleNav"
        :class="{ active: isNavOpen }">
        <span class="VisuallyHidden">
          Toggle navigation
        </span>
        <span
          class="Menu"
          :class="{ active: isNavOpen }">
          <span class="Menu-bar bar1"></span>
          <span class="Menu-bar bar2"></span>
          <span class="Menu-bar bar3"></span>
        </span>
      </button>

      <ul
        class="Nav-list"
        :class="{ hidden: !isNavOpen }">

        <li class="Nav-item">
          <NuxtLink
            class="Nav-link"
            to="/how-to">
            How To
          </NuxtLink>
        </li>

        <li class="Nav-item">
          <NuxtLink
            class="Nav-link"
            to="/about">
            About
          </NuxtLink>
        </li>

      </ul>

    </nav>

  </header>

</template>

<script>
export default {
  
  data() {
    return {

      isNavOpen: false
    }
  },

  methods: {

    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    },

    closeNav() {
      this.isNavOpen = false
    }
  },

  watch: {

    $route() {
      this.closeNav()
    }
  }
}
</script>