import * as WebBrowser from 'expo-web-browser';

export default async function WebViewBrowser(url) {

  const browserResult = await WebBrowser.mayInitWithUrlAsync(url);

  if (browserResult) {
      await WebBrowser.openBrowserAsync(url, {
        showTitle: true, // exibe ou oculta o título da página (opcional)
        enableBarCollapsing: true, // Oculta a barra de endereço e de ferramentas do navegador ao rolar para baixo
        toolbarColor: '#3498db', // Define a cor da barra de ferramentas do navegador
        browserPackage: browserResult.servicePackage,
        cookieEnabled: true, // Define a política de cookies para permitir ou bloquear e armazenamento de cookies na página carregada
        toolbar: true // oculta a barra de ferramentas e endereço do navegador
      });
    } else {
        await WebBrowser.openBrowserAsync(url);
    }
}
