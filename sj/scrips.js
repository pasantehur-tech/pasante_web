javascript
document.addEventListener('DOMContentLoaded', function() {
    const patronDiv = document.getElementById('patronTexto');
    if (!patronDiv) return;

    const palabras = [
        'ubic', 'cubic', 'ugubic', 'umebubic', 'dubic', 
        'ticoubic', 'uevicubic', 'bunice', 'useful', 'Granda', 
        'Grandma', 'Commento', 'cumanoga', 'greenugogue'
    ];
    
    let resultado = '';
    
    for (let i = 0; i < 150; i++) {
        let linea = '';
        let repeticiones = Math.floor(Math.random() * 30) + 10;
        
        for (let j = 0; j < repeticiones; j++) {
            let palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
            linea += palabraAleatoria;
            if (Math.random() > 0.3) {
                linea += ' ';
            }
        }
        resultado += linea + '\n';
    }
    
    patronDiv.textContent = resultado;
});