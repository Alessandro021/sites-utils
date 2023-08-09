import {mayInitWithUrlAsync, openBrowserAsync} from 'expo-web-browser';

export default async function WebViewBrowser(url) {
  await mayInitWithUrlAsync(url)
    .then(async browserResult => await openBrowserAsync(url, {
      browserPackage: browserResult.servicePackage,
      showTitle: true, // exibe ou oculta o título da página (opcional)
      enableBarCollapsing: true, // Oculta a barra de endereço e de ferramentas do navegador ao rolar para baixo
      toolbarColor: '#3498db', // Define a cor da barra de ferramentas do navegador
      cookieEnabled: true, // Define a política de cookies para permitir ou bloquear e armazenamento de cookies na página carregada
      toolbar: true, // oculta a barra de ferramentas e endereço do navegador
      showInRecents: false,
      createTask: false,
     })
      .catch(async () => await WebBrowser.openBrowserAsync(url))
    )
    .catch(() => { return })
}
