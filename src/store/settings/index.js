export default {
    namespaced: true,
    
    state: {
      mode: 'normal',
      display: {
        visible: false,
        ordination: {
          select: {alphabet: 0, progress: 0},
          enable: 'alphabet',
          options: {
            alphabet: ['order', 'reverse'],
            progress: ['more progress', 'less progress']
          },
        },
        
        modes: {
          select: 'grid',
          options: ['list', 'grid'],
        }
      },
    },
  
    mutations: {
      loadConfiguration(state){
        return new Promise((resolve, _) => {
          chrome.storage.local.get(['settings'], ( { settings} ) => {
            if(settings !== undefined)
              state.display = settings
            
            resolve({status: true})
          })
        })
      },
  
      saveConfiguration(state){
        return new Promise((resolve, _) => {
          chrome.storage.local.set({'settings': state.display }, null)
          resolve({status:  true })
        })
      },
      
      setVisibleMenu(state){
        state.displaySetting.visible = !state.displaySetting.visible
      },

      changeMode(state){
      
        const NORMAL = 'normal'
        const READ   = 'read'
  
        state.mode = (state.mode === READ) ? NORMAL : READ
        
      },
    },
    actions: {},
    gettets: {
      display: state => state.display,
      mode: state => state.mode,
    }, 
  }