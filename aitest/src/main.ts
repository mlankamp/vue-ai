import { createApp } from 'vue'
import { ApplicationInsights, DistributedTracingModes } from '@microsoft/applicationinsights-web'
import './style.css'
import App from './App.vue'


const appInsights = new ApplicationInsights({ config: {
  connectionString: 'YOUR_CONNECTION_STRING_GOES_HERE',
  distributedTracingMode: DistributedTracingModes.AI,
  enableCorsCorrelation: true,
  enableRequestHeaderTracking: true,
  disableAjaxTracking: false,
  disableFetchTracking: false
} });

appInsights.loadAppInsights();
appInsights.trackPageView();

createApp(App).mount('#app')
