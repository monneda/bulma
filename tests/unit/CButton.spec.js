import { mount } from '@vue/test-utils'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import icons from '@/plugins/icons'
import CButton from '@/ui/CButton'


describe('CButton', () => {
  test('renders slot', () => {
    const wrapper = mount(CButton, {
      global: { plugins: [icons] },
      slots: { default: 'My button' }
    })

    const text = wrapper.text()
    expect(text).toMatch('My button')
  })

  test('does not render icons', () => {
    const wrapper = mount(CButton, {
      global: { plugins: [icons] },
    })

    const fIcons = wrapper.findAllComponents(FontAwesomeIcon)
    expect(fIcons.length).toBe(0)
  })

  test('renders icon on the left', () => {
    const wrapper = mount(CButton, {
      global: { plugins: [icons] },
      props: { icon: 'search', left: true }
    })

    const fIcons = wrapper.findAllComponents(FontAwesomeIcon)
    expect(fIcons.length).toBe(1)
  })

  test('renders icon on the right', () => {
    const wrapper = mount(CButton, {
      global: { plugins: [icons] },
      props: { icon: 'search', right: true }
    })

    const fIcons = wrapper.findAllComponents(FontAwesomeIcon)
    expect(fIcons.length).toBe(1)
  })

  test('renders icon on both sides', () => {
    const wrapper = mount(CButton, {
      global: { plugins: [icons] },
      props: { icon: 'search', left: true, right: true }
    })

    const fIcons = wrapper.findAllComponents(FontAwesomeIcon)
    expect(fIcons.length).toBe(2)
  })

  test('`is-loading` class present', () => {
    const wrapper = mount(CButton, {
      global: { plugins: [icons] },
      props: { loading: true }
    })

    wrapper.get('.is-loading')
  })


  test('`is-loading` class not present', () => {
    const wrapper = mount(CButton, {
      global: { plugins: [icons] },
      props: { loading: false }
    })

    expect(() => wrapper.get('.is-loading')).toThrowError()
  })
})
