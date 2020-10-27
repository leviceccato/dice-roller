<template>

  <NuxtLink
    class="Logo"
    to="/">

    <span class="VisuallyHidden">
      Dice Roller
    </span>

    <div
      class="Logo-dieContainer"
      style="
        background-image: url('/preview-die.png');
      ">
      <canvas
        class="Logo-die"
        width="75"
        height="75"
        ref="logo">
      </canvas>
    </div>

    <svg
      class="Logo-text"
      width="129.21"
      height="48.41">

      <path d="M45.04 37.3c0-1.64-.04-1.96-.34-2.96a10.63 10.63 0 00-5.37-6.46 11.83 11.83 0 00-6-1.4c-3.5.02-5.99 1-8.3 3.3a7.74 7.74 0 00-1.8 2.35c-.32.61-.73 1.62-.92 2.22-.3 1.02-.33 1.28-.33 3.14 0 1.87.02 2.13.33 3.15 1.33 4.37 4.96 7.23 9.77 7.72 1.17.12 2.47.05 3.85-.2a11.05 11.05 0 006.17-3.27 10.07 10.07 0 002.94-7.58zm-9.62 5.75c-1.45.5-3.25.4-4.58-.25-1.8-.87-2.9-2.88-2.9-5.3.01-3.7 2.06-5.93 5.44-5.93 2.85 0 4.86 1.55 5.5 4.22.74 3.16-.78 6.35-3.46 7.26z"/>

      <path d="M17.16 39.8c-1.19-1.56-1.28-1.73-1.07-1.84.13-.07.6-.5 1.04-.95a5.7 5.7 0 001.6-2.74c.15-.7.15-2.24 0-2.94a5.8 5.8 0 00-2.99-3.71c-1.66-.78-1.73-.79-7.88-.84-3.09-.03-5.91-.03-6.28 0l-.67.03 1.24.77c.68.43 1.34.93 1.47 1.11.22.33.23.76.27 8.37.02 4.42 0 8.2-.04 8.43-.11.62-.6 1.1-1.96 1.89l-1.25.73h12.22l-1.05-.59c-1.37-.77-1.83-1.12-2.07-1.57-.28-.52-.4-5.99-.13-5.99.5 0 .79.33 6.02 6.7l1.18 1.45h9.16c-2.02-.82-4.93-3.25-8.8-8.32zm-5.68-3.94c-.53.16-1.79.2-1.93.07a20.8 20.8 0 01-.08-2.53v-2.45h1.02c.82 0 1.14.06 1.57.28.8.4 1.05.82 1.05 1.74 0 1.57-.58 2.58-1.63 2.9z"/>

      <path d="M26.18 6.81l.04 5.77c-.05 9 .14 8-1.73 9.13l-1.35.83c-.13.08 1.84.12 5.75.13h5.95l-1.41-.85c-.91-.54-1.5-.98-1.64-1.22-.2-.35-.21-.78-.18-5.23l-.05-7.5c.05-5.24.18-4.86 1.04-5.41.33-.2.96-.58 1.4-.82l.81-.45H23.16l1.23.78c1.87 1.18 1.8.98 1.8 4.84z"/>
      
      <path d="M34.38 11.95s.05 2.04.2 2.75a10.47 10.47 0 004.98 6.83c1.26.76 2.71 1.3 4.3 1.55 1.14.18 3.44.16 4.9-.05 1.3-.19 3.89-.74 4-.86.04-.04.2-1.29.36-2.77l.36-3.3.07-.6-.73.5c-.97.67-2.86 1.55-3.87 1.8-1.12.3-3.27.4-4.25.2-2.3-.45-3.71-1.94-4.15-4.4a9.1 9.1 0 010-2.92c.44-2.45 1.85-3.95 4.15-4.4.98-.2 3.13-.1 4.25.2 1.01.26 2.9 1.14 3.87 1.8l.73.5-.07-.6-.36-3.3a33.9 33.9 0 00-.35-2.77c-.12-.12-2.7-.67-4-.86a20.66 20.66 0 00-4.91-.05c-4.65.74-8.13 3.86-9.2 8.26-.17.67-.26 1.57-.28 2.49z"/>
      
      <path d="M2.67 4.2c1.35 1.14 1.24.33 1.24 8.75 0 8.6.2 7.62-1.79 8.8-.7.43-1.3.8-1.34.85-.13.12 11.1.08 12.62-.05 2.74-.25 4.43-.91 6.5-2.58a10.23 10.23 0 003.58-8.04A10.37 10.37 0 0015.39 1.5c-.65-.16-1.9-.22-6.27-.3-6.37-.12-7.3-.22-8.6-1C.3.07.11-.01.03 0L.02.01C-.1.13.36 1.37.81 2.13c.52.87.85 1.23 1.86 2.08zM9.8 6.27l1.95.05c2.4.07 3.09.28 4.07 1.26 1 1.02 1.54 2.51 1.55 4.31 0 2.48-1 4.34-2.76 5.15-.74.35-.88.37-2.8.4l-2.01.05V6.26z"/>
      
      <path d="M55.84 21.79l-1.48.88h8.84c8.31 0 8.85-.01 8.9-.21.04-.12.38-1.65.76-3.39.39-1.74.72-3.23.75-3.3.03-.09-.47.2-1.1.63a5.7 5.7 0 01-1.8.92c-.39.08-1.98.14-3.87.14H63.6v-3.24l3.1.03 3.1.04.44.43.44.43V8.64l-.4.22c-.35.19-.82.22-3.54.26l-3.13.04V6.28s6.07.06 6.38.14c.29.07.88.4 1.32.73.44.33.82.55.84.49.04-.11-.42-5.27-.55-6.04l-.06-.4H54.63l1.22.77c1.94 1.23 1.74.1 1.78 9.78.02 6.96 0 8.38-.15 8.73-.14.35-.45.6-1.64 1.31z"/>
      
      <path d="M60.75 42.82c-.38.08-1.97.14-3.86.14h-3.23V31.78l.1-5.09h-9.08l1.22.78c1.94 1.23 1.74.1 1.78 9.78.02 6.96 0 8.38-.15 8.73-.14.35-.45.6-1.64 1.31l-1.48.88h8.84c8.31 0 8.85 0 8.9-.21.04-.12.38-1.65.76-3.39.39-1.74.72-3.23.75-3.3s-.47.2-1.1.63a5.7 5.7 0 01-1.8.92z"/>
      
      <path d="M80 42.82c-.38.08-1.97.14-3.87.14h-3.22V31.78L73 26.7h-9.07l1.22.78c1.94 1.23 1.73.1 1.77 9.78.03 6.96 0 8.38-.14 8.74-.15.34-.46.59-1.65 1.3l-1.47.88h8.84c8.3 0 8.84 0 8.9-.21l.76-3.39.74-3.3c.02-.08-.47.2-1.1.63-.79.53-1.36.83-1.8.92z"/>
      
      <path d="M99.24 42.82c-.38.08-1.96.14-3.86.14h-3.23v-3.24l3.1.04 3.1.03.44.43.44.43v-6.51l-.4.22c-.35.19-.82.22-3.54.26l-3.13.04v-2.88h2.92c1.68 0 3.15.06 3.46.14.29.07.88.4 1.32.73.44.33.82.55.84.49.04-.11-.42-5.27-.55-6.04l-.06-.4H83.17l1.22.77c1.94 1.23 1.74.1 1.78 9.78.02 6.96 0 8.38-.15 8.73-.14.35-.45.6-1.64 1.31l-1.48.88h8.84c8.31 0 8.85 0 8.9-.21.04-.12.38-1.65.76-3.39.39-1.74.72-3.23.75-3.3s-.47.2-1.1.63a5.7 5.7 0 01-1.8.92z"/>
      
      <path d="M128.75 45.95c-.62.28-1.07.48-2.35.45-1.27-.02-3.42-1.61-4.5-2.73a54.5 54.5 0 01-3.23-3.88c-1.19-1.55-1.29-1.72-1.07-1.83.13-.07.6-.5 1.04-.95a5.7 5.7 0 001.6-2.74c.15-.7.15-2.24 0-2.94a5.8 5.8 0 00-2.99-3.71c-1.66-.78-1.73-.78-7.88-.84-3.09-.02-5.92-.03-6.28 0l-.67.03 1.24.77c.68.43 1.34.93 1.47 1.11.22.33.23.76.27 8.37.02 4.42 0 8.2-.04 8.43-.11.62-.61 1.1-1.96 1.89l-1.25.73h12.22l-1.05-.59c-1.37-.77-1.83-1.12-2.07-1.57-.28-.52-.4-5.99-.13-5.99.5 0 .79.33 6.02 6.7l1.18 1.45H125.15c.16 0 .3-.02.45-.03 2.43-.13 3.1-1.28 3.34-1.68.27-.45.52-.77-.19-.45zM113 35.86c-.53.16-1.8.2-1.93.07-.04-.05-.08-1.18-.08-2.53v-2.45H112c.82 0 1.13.06 1.57.28.8.4 1.05.82 1.05 1.74-.01 1.57-.58 2.58-1.63 2.9z"/>

    </svg>

  </NuxtLink>

</template>

<script>
import Zdog from 'zdog'

const PHI = (1 + Math.sqrt(5)) / 2
const unit = 29
const short = unit / 2
const long = unit * PHI / 2

export default {

  data() {
    return {
      logo: {},
      speed: {
        x: 0,
        y: 0,
        z: 0
      },
      excludedAxis: 1,
      duration: 500
    }
  },

  methods: {

    easeOutQuart: t => 1 - (--t) * t * t * t,

    randomNumber: (min, max) => Math.floor(Math.random() * (max - min + 1) + min),

    randomPositivity: () => Math.round(Math.random()) * 2 - 1,

    spinDie() {

      this.excludedAxis = this.randomNumber(3, 3)
      this.speed.x = this.randomPositivity()
      this.speed.y = this.randomPositivity()
      this.speed.z = this.randomPositivity()

      //this.duration = this.randomNumber(1, 3) * 100

      this.animate()
    },

    animate() {

      let start

      const drag = () => {
        this.logo.updateRenderGraph()
        requestAnimationFrame(drag)
      }

      const step = (timeStamp) => {

        if (start === undefined) {
          start = timeStamp
        }

        const elapsed = timeStamp - start

        if (elapsed > this.duration) {
          requestAnimationFrame(drag)
          return
        }

        const rate = this.easeOutQuart(elapsed / this.duration)
        
        this.logo.rotate.x += this.excludedAxis === 1 ? 0 : this.speed.x * rate / 5
        this.logo.rotate.y += this.excludedAxis === 2 ? 0 : this.speed.y * rate / 5
        this.logo.rotate.z += this.excludedAxis === 3 ? 0 : this.speed.z * rate / 5
        this.logo.updateRenderGraph()

        requestAnimationFrame(step)
      }

      requestAnimationFrame(step)
    }
  },

  mounted() {

    this.logo = new Zdog.Illustration({
      element: this.$refs.logo,
      zoom: 1,
      dragRotate: true,
      rotate: {
        y: 12.19
      }
    })

    new Zdog.Shape({
      addTo: this.logo,
      stroke: 62,
      color: '#f4dfc3'
    })

    new Zdog.Shape({
      addTo: this.logo,
      stroke: long * 2 + 3,
      color: '#f4dfc3',
    });

    const triangle = new Zdog.Shape({
      addTo: this.logo,
      path: [
        { x: 0, y: -short, z: long },
        { x: -short, y: -long, z: 0 },
        { x: -long, y: 0, z: short }
      ],
      stroke: 2,
      color: '#e41e26'
    })

    triangle.copy({
      path: [
        { x: 0, y: -short, z: long },
        { x: -short, y: -long, z: 0 },
        { x: short, y: -long, z: 0 },
      ],
    })

    triangle.copy({
      path: [
        { x: 0, y: -short, z: long },
        { x: long, y: 0, z: short },
        { x: short, y: -long, z: 0 },
      ],
    })

    triangle.copy({
      path: [
        { x: 0, y: -short, z: long },
        { x: long, y: 0, z: short },
        { x: 0, y: short, z: long },
      ],
    })

    triangle.copy({
      path: [
        { x: 0, y: -short, z: long },
        { x: -long, y: 0, z: short },
        { x: 0, y: short, z: long },
      ],
    })

    triangle.copy({
      path: [
        { x: -short, y: long, z: 0 },
        { x: -long, y: 0, z: short },
        { x: 0, y: short, z: long },
      ],
    })

    triangle.copy({
      path: [
        { x: -short, y: long, z: 0 },
        { x: short, y: long, z: 0 },
        { x: 0, y: short, z: long },
      ],
    })

    triangle.copy({
      path: [
        { x: long, y: 0, z: short },
        { x: short, y: long, z: 0 },
        { x: 0, y: short, z: long },
      ],
    })

    triangle.copy({
      path: [
        { x: long, y: 0, z: short },
        { x: short, y: long, z: 0 },
        { x: long, y: 0, z: -short },
      ],
    })

    triangle.copy({
      path: [
        { x: long, y: 0, z: short },
        { x: short, y: -long, z: 0 },
        { x: long, y: 0, z: -short },
      ],
    })

    triangle.copy({
      path: [
        { x: 0, y: -short, z: -long },
        { x: short, y: -long, z: 0 },
        { x: long, y: 0, z: -short },
      ],
    })

    triangle.copy({
      path: [
        { x: 0, y: -short, z: -long },
        { x: short, y: -long, z: 0 },
        { x: -short, y: -long, z: 0 },
      ],
    })

    triangle.copy({
      path: [
        { x: 0, y: -short, z: -long },
        { x: -long, y: 0, z: -short },
        { x: -short, y: -long, z: 0 },
      ],
    })

    triangle.copy({
      path: [
        { x: -long, y: 0, z: short },
        { x: -long, y: 0, z: -short },
        { x: -short, y: -long, z: 0 },
      ],
    })

    triangle.copy({
      path: [
        { x: -long, y: 0, z: short },
        { x: -long, y: 0, z: -short },
        { x: -short, y: long, z: 0 },
      ],
    })

    triangle.copy({
      path: [
        { x: 0, y: short, z: -long },
        { x: -long, y: 0, z: -short },
        { x: -short, y: long, z: 0 },
      ],
    })

    triangle.copy({
      path: [
        { x: 0, y: short, z: -long },
        { x: -long, y: 0, z: -short },
        { x: 0, y: -short, z: -long },
      ],
    })

    triangle.copy({
      path: [
        { x: 0, y: short, z: -long },
        { x: long, y: 0, z: -short },
        { x: 0, y: -short, z: -long },
      ],
    })

    triangle.copy({
      path: [
        { x: 0, y: short, z: -long },
        { x: long, y: 0, z: -short },
        { x: short, y: long, z: 0 },
      ],
    })

    triangle.copy({
      path: [
        { x: 0, y: short, z: -long },
        { x: -short, y: long, z: 0 },
        { x: short, y: long, z: 0 },
      ]
    })

    this.animate()

    this.$bus.$on('dice-rolled', () => {
      this.spinDie()
    })

    /*
    const rect = new Zdog.Rect({
      addTo: this.logo,
      width: unit,
      height: unit * PHI,
      stroke: 1,
      color: '#3870b7'
    })

    rect.copy({
      rotate: {
        x: Zdog.TAU / 4,
        y: Zdog.TAU / 2,
        z: Zdog.TAU / 4
      }
    })

    rect.copy({
      rotate: {
        x: Zdog.TAU / 2,
        y: Zdog.TAU / 4,
        z: Zdog.TAU / 4
      }
    }) */
  }
}
</script>