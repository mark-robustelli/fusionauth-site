Prime.Document.onReady(function() {
  var container = document.getElementById('downloads');
  var setVersions = function(response, callback) {
    var archived = true;
    var cutOverVersion = "1.14.0";
    for (var i = 0; i < response.versions.length; i++) {
      var version = response.versions[i];

      var idVersion = version.replace(/\./g, '_');
      var versionDiv = document.getElementById(idVersion);
      if (versionDiv) {
        continue;
      }

      if (version === cutOverVersion) {
        archived = false;
      }

      var releaseNotesLink = archived ?  "/docs/v1/tech/archive/release-notes{anchor}" : "/docs/v1/tech/release-notes{anchor}";
      var div =
          (i === response.versions.length - 1 ? '<div id="' + idVersion + '">' : '<div id="' + idVersion + '" class="mt-5">') +
          '<h4 class="border-bottom">{version}\
             <span style="font-size: 0.5em;" class="font-weight-light"><a href=' + releaseNotesLink + '>Release Notes</a></span>\
             <span style="font-size: 0.5em;" class="font-weight-light">| <a href="/docs/v1/tech/installation-guide/packages/">Installation Guide</a></span>\
          </h4>\
            <a href="https://files.fusionauth.io/products/fusionauth/{version}/fusionauth-app-{version}.zip">fusionauth-app-{version}.zip</a>\
            <br>\
            <a href="https://files.fusionauth.io/products/fusionauth/{version}/fusionauth-app_{version}-1_all.deb">fusionauth-app_{version}-1_all.deb</a>\
            <br>\
            <a href="https://files.fusionauth.io/products/fusionauth/{version}/fusionauth-app-{mVersion}-1.noarch.rpm">fusionauth-app-{mVersion}-1.noarch.rpm</a>\
            <br>\
            <br>\
            <a href="https://files.fusionauth.io/products/fusionauth/{version}/fusionauth-search-{version}.zip">fusionauth-search-{version}.zip</a>\
            <br>\
            <a href="https://files.fusionauth.io/products/fusionauth/{version}/fusionauth-search_{version}-1_all.deb">fusionauth-search_{version}-1_all.deb</a>\
            <br>\
            <a href="https://files.fusionauth.io/products/fusionauth/{version}/fusionauth-search-{mVersion}-1.noarch.rpm">fusionauth-search-{mVersion}-1.noarch.rpm</a>\
            <br>\
            <br>\
            <a href="https://files.fusionauth.io/products/fusionauth/{version}/fusionauth-database-schema-{version}.zip">fusionauth-database-schema-{version}.zip</a>\
            <a href="/docs/v1/tech/installation-guide/fusionauth-app#advanced-installation"> (See Advanced Installation)</a> \
           </div>';

      container.insertAdjacentHTML('afterbegin', div
          .replace(/\{version\}/g, version)
          .replace(/\{mVersion\}/g, version.replace('-', '.'))
          .replace(/\{anchor\}/g, '#version-' + version.replace(/\./g, '-')));
    }

    if (callback) {
      callback();
    }
  };

  var fetchVersions = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://account.fusionauth.io/api/version');
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Store it off so the pages loads faster
        localStorage.setItem('io.fusionauth.downloads', xhr.responseText);
        var response = JSON.parse(xhr.responseText);
        setVersions(response);
      }
      else {
        console.error('Request failed.  Returned status of ' + xhr.status);
      }
    };
    xhr.send();
  };

  // On page load, set the versions from the cache if possible to limit the FOUC
  var cachedResponse = localStorage.getItem('io.fusionauth.downloads');
  if (cachedResponse !== null && typeof cachedResponse !== 'undefined') {
    setVersions(JSON.parse(cachedResponse), fetchVersions);
  } else {
    fetchVersions();
  }
});
