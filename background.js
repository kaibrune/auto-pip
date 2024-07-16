
chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
      if (tab && tab.url && tab.url.includes('youtube.com/watch')) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['content.js']
        }).catch(error => {
          console.error('Error:', error);
        });
      }
    });
  });

  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab && tab.url && tab.url.includes('youtube.com/watch') && changeInfo.status === 'complete') {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
      }).catch(error => {
        console.error('Error:', error);
      });
    }
  });
});
