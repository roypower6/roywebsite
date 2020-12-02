Vue.component('progressbar', {
    template: `<div>
                  <slot></slot>
                  <progress :value="value" max="100"/>
                </div>`,
    props: {
      target: {
        type: Number
      }
    },
    data () {
      return {
        value: 0,
        interval: null
      }
    },
    mounted () {
      this.interval = setInterval(() => {
        this.value++
      }, 10)
    },
    watch: {
      value (v) {
        if (v === this.target) {
          clearInterval(this.interval)
        }
      }
    }
  })
  
  new Vue({
    el: '.progressbar-container',
    components: ['progressbar'],
    data () {
      return {
        items: [
          {
            key: 'C',
            value: 80,
          },
          {
            key: 'JAVA',
            value: 60
          },
          {
            key: 'PYTHON',
            value: 70
          },
          {
            key: 'HTML CSS JAVASCRIPT',
            value: 30
          },
          {
            key:'REACT',
            value: 10
          }
        ]
      }
    }
  })