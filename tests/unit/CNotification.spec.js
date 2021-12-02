import { mount } from '@vue/test-utils'

import CNotification from '@/ui/CNotification'


describe('CNotification', () => {
  test('renders slot', async () => {
    const wrapper = mount(CNotification, {
      slots: { default: 'My notification' },
      propsData: { active: true }
    })

    const text = wrapper.text()
    expect(text).toMatch('My notification')
  })

  test('does not render', async () => {
    const wrapper = mount(CNotification, {
      slots: { default: 'My notification' },
      propsData: { active: false }
    })

    expect(wrapper.isVisible()).toBe(false)
  })

  test('emits `close` after time', async () => {
    jest.useFakeTimers()
    jest.spyOn(global, 'setTimeout')

    const wrapper = mount(CNotification, {
      slots: { default: 'My notification' },
      propsData: { active: false, time: 1 }
    })

    await wrapper.setProps({ active: true })
    expect(setTimeout).toHaveBeenCalledTimes(1)

    jest.runAllTimers()

    expect(wrapper.emitted('close')).toBeTruthy()
  })

  test('clears timeout if closed before time runs out', async () => {
    jest.spyOn(global, 'clearTimeout')

    const wrapper = mount(CNotification, {
      slots: { default: 'My notification' },
      propsData: { active: false, time: 1 }
    })

    await wrapper.setProps({ active: true })
    await wrapper.setProps({ active: false })

    expect(clearTimeout).toHaveBeenCalledTimes(1)
  })
})
