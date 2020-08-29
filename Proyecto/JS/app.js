let abc = ""

for(let i=97; i <= 122; i++){


let letra = String.fromCharCode(i); 
abc+= `<li><a href="#${letra}" id="${letra}" onclick="selectGlosario('${letra}')">${letra}</a></li> `;
alfabeto.innerHTML = abc;

function selectGlosario(letra){
    
    var Formulario = document.addForm;
    var tabla = document.getElementById("tabla");


      switch(letra){

        case "a":

      tabla.innerHTML = ` 

                    <tr>     <td colspan="3"><h4>ADSL (Asymetric Digital Subscriber Line): </h4>Este sistema permite transmitir información en formato digital a través de las líneas normales de teléfono.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Ancho de Banda:</h4> Número máximo de datos que pueden circular por un camino (línea ADSL) en un tiempo determinado (segundos).</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Agente:</h4> En el modelo cliente/servidor, es la parte del sistema que facilita el intercambia de la información entre el cliente y el servidor.</td>  <br> </tr>

        `;
        break;

        case "b":

      tabla.innerHTML = ` 

                    <tr>     <td colspan="3"><h4>BIOS (Basic Input Output System):</h4> Pequeño programa que coordina las actividades de los distintos componentes de un ordenador y comprueba su estado.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>BIT:</h4> Es la unidad de información más pequeña. Puede tener sólo dos valores o estados: 0 ó 1, encendido o apagado. La combinación de estos valores es la base de la informática, ya que los circuitos internos del ordenador sólo son capaces de detectar si la corriente llega o no llega (0 ó 1).</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Banda Ancha:</h4> Característica de cualquier red que permite la conexión de varias redes en un único cable. Para evitar las interferencias en la información manejada en cada red, se utilizan diferentes frecuencias para cada una de ellas. La banda ancha hace referencia también a una gran velocidad de transmisión.</td>  <br> </tr>

        `;
        break;

        case "c":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>Cookie:</h4> Cuando se visita una página Web, es posible recibir una Cookie. Este es el nombre que se da a un pequeño archivo de texto, que queda almacenado en el disco duro del ordenador. Este archivo sirve para identificar al usuario cuando se conecta de nuevo a dicha página Web.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Cable coaxial:</h4> Se usa normalmente en la conexión de redes con topología de Bus como Ethernet y ArcNet. El cable coaxial es más inmune a las interferencias o al ruido que el par trenzado, es también mucho más rígido, por lo que al realizar las conexiones entre redes la labor será más dificultosa.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Codec:</h4> Sistema que permite reducir los problemas planteados por el gran espacio de almacenamiento que ocupan los archivos de vídeo.</td>  <br> </tr>
        `;
        break;

        case "d":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>Dirección IP (dirección de protocolo de Internet):</h4> La forma estándar de identificar un equipo que está conectado a Internet, de forma similar a como un número de teléfono es único dentro de una red telefónica. La dirección IP consta de cuatro números separados por puntos y cada numero es menor de 256; por ejemplo 192.200.44.69.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>DNS:</h4> Es el acrónimo de Domain Name Server (servidor de nombres de dominio). Un servidor de nombres de dominio es un servidor ubicado en Internet que traduce las URLs (Uniform Resource Locator o localizador uniforme de fuentes) como http://www.adslayuda.com en direcciones IPs. Muchos ISPs no necesitan que se introduzca esta información en el router.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>DSL:</h4> Significa Digital Subscriber Line o línea digital de abonado. Un módem DSL utiliza sus líneas telefónicas existentes para transmitir datos a altas velocidades.</td>  <br> </tr>
        `;
        break;

        case "e":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>Ethernet:</h4> Red de área local (LAN) de medios compartidos desarrollada por Xerox, Digital e Intel. Es el método de acceso LAN que más se utiliza (seguido por Token Ring).</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Encapsulado:</h4> Técnica en la que la información a enviar se coloca en el área de datos de un paquete o cuadro. Puede encapsularse el paquete de un protocolo en otro (por ejemplo, el ICMP puede encapsularse en IP).</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>EEPROM (Electrically Erasable Progammable Read Only Memory):</h4> Memoria de sólo lectura programable y borrable eléctricamente. Chip de memoria que retiene su contenido sin energía. Puede borrarse, tanto dentro del computador como externamente.</td>  <br> </tr>
        `;
        break;

        case "f":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>Fast Ethernet:</h4> Ethernet de alta velocidad a 100 Mbps (la Ethernet regular es de 10 Mbps).</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Firmware:</h4> Software almacenado en memoria. Programas esenciales que permanecen incluso cuando se apaga el sistema. El firmware es más fácil de cambiar que el hardware pero más permanente que el software almacenado en un disco.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Firewall:</h4> (Cortafuegos) Es un ordenador o un programa que conecta una red a Internet pero impide el acceso no autorizado desde Internet. Mecanismo que permite que las comunicaciones entre una red local e Internet se realicen conforme a las políticas de seguridad de quien los instala.</td>  <br> </tr>
        `;
        break;

        case "g":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>Gateway:</h4> Pasarela, puerta de acceso. Realiza la conversión de protocolos entre diferentes tipos de redes o aplicaciones. Sirve para, por ejemplo, conectar una LAN de ordenadores personales a una red del tipo Internet.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>GNU:</h4> Licencia Publica General. Software desarrollado para distribución sin fines de lucro. El proyecto GNU (GNU es un acronimo recursivo para “Gnu No es Unix”) comenzó en 1984 para desarrollar un sistema operativo tipo Unix completo, que fuera Software Libre.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>GRE:</h4> En un tunel de una VPN de punto-a-punto, GRE (Generic Routing Encapsulation) será el protocolo de encapsulamiento más habitual, a fin de poder pasar un paquete de cualquier protocolo nativo envuelto en un paquete IP enviable por Internet.</td>  <br> </tr>
        `;
        break;

        case "h":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>HTML (HyperText Markup Language):</h4> Lenguaje de marcado de Hipertexto. Es el lenguaje estándar para describir el contenido y la apariencia de las páginas en el WWW.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>HTTP (Hiper Text Transfer Protocol):</h4> Técnica en la que la información a enviar se coloca en el área de datos de un paquete o cuadro. Puede encapsularse el paquete de un protocolo en otro (por ejemplo, el ICMP puede encapsularse en IP).</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>HUB:</h4> Concentrador dispositivo que integra distintas clases de cables y arquitecturas o tipos de redes de área local.</td>  <br> </tr>
        `;
        break;

        case "i":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>Internet:</h4> Conjunto de redes de ordenadores creada a partir de redes de menos tamaño, cuyo origen reside en la cooperación de dos universidades estadounidenses.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>IP de red:</h4> IP que hace mención a una red formada por un rango determinado de IPs. Dicha referencia es representada por un 0 (cero) al final del rango. Ej: 172.26.1.0.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>ISP (Internet Service Provider):</h4> Proveedor de Servicios Internet. Un ISP es una empresa que proporciona conectividad a Internet para particulares y otras empresas u organizaciones.</td>  <br> </tr>
        `;
        break;

        case "j":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>Java:</h4> Es un lenguaje de programación y una plataforma informática que fue comercializada por primera vez en 1995 por Sun Microsystems.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>JavaScript:</h4> Es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,3​ basado en prototipos, imperativo, débilmente tipado y dinámico.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>JSON:</h4> Es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto de la notación literal de objetos de JavaScript, aunque, debido a su amplia adopción como alternativa a XML, se considera un formato independiente del lenguaje.</td>  <br> </tr>
        `;
        break;

        case "k":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>KB (Kilobyte):</h4> Unidad de medida utilizada en informática que equivale a 1.024 bytes. 1 byte contiene 8 bits.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Kbps (Kilobits por segundo):</h4> Unidad de medida de la velocidad de transmisión por una línea de telecomunicación. Cada kilobit esta formado por mil bits.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Keyboard:</h4> Teclado en español. Conjunto de teclas de entrada. En terminales y computadores personales, el teclado incluye las teclas de una máquina de escribir estándar y varias teclas especiales tales como control, alt y esc, así como las teclas de función.</td>  <br> </tr>
        `;
        break;

        case "l":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>LAN (Local Area Network o Red de Área Local.):</h4> Una LAN es un grupo de ordenadores y dispositivos conectados juntos en un área relativamente pequeña (como una casa o una oficina): Su red doméstica es considerada una LAN.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>LLC (Logical Link Control):</h4> Control de enlace lógico. Parte de la cabecera LLC/SNAP del IEEE usada para identificar el tipo de un paquete. La cabecera completa es de 8 octetos, de los que la parte LLC ocupa los primeros tres.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>LAMP:</h4> Describe al conjunto de herramientas utilizadas para generar aplicaciones web. Utiliza la combinación de: Linux, Apache, MySQL y PHP.</td>  <br> </tr>
        `;
        break;

        case "m":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>MAC (Access Control o Control de Acceso al Medio):</h4> Una dirección MAC es la dirección hardware de un dispositivo conectado a una red.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Mbps (Megabits por segundo):</h4> Unidad de medida de la velocidad de transmisión por una línea de telecomunicación. Cada megabit esta formado por un millón de bits.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Modem:</h4> Es un dispositivo que se conecta al ordenador y que permite intercambiar datos con otros ordenadores a través de la línea telefónica.</td>  <br> </tr>
        `;
        break;

        case "n":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>NAT (Network Address Translation):</h4> Traducción de Direcciones de Red. Cambia las direcciones IP en el encabezado IP. Permite conectar con una sola dirección pública una serie de máquinas a Internet.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>NTP (Network Time Protocol):</h4> El protocolo NTP se utiliza para sincronizar servidores con una precisión de nanosegundos.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>NIC (Network Interface Card):</h4> Conectada a un slot libre del ordenador, es la encargada de gestionar las comunicaciones. Es, en definitiva, la que proporciona la conexión física entre el ordenador y el cable.</td>  <br> </tr>
        `;
        break;

        case "o":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>OEM (Original Equipment Manufacturer):</h4>  Como ocurre con mucha frecuencia en la jerga informática, estas siglas se usan casi siempre como un sustantivo. Cuando se dice que una empresa es «0EM» de otra o que ha firmado un acuerdo «0EM», significa que aquélla incorpora a un sistema determinado un elemento fabricado por ésta.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>OFF-LINE:</h4> (Fuera de línea) Estado del módem cuando se desconecta de otro módem. Coloquialmente se dice que se está fuera de línea cuando se está desconectado</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>ODBC (Open Data Base Connection):</h4> Conexión abierta a base de datos. Es una forma de conexión a veces de datos, independientemente del lenguaje o programa que estemos utilizando. Cada fabricante provee su propia librería( DLL ) con las características de conexión a las bases de datos.</td>  <br> </tr>
        `;
        break;


        case "p":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>PLC (PowerLine Comunications):</h4> Tecnología de comunicaciones por medio del cable eléctrico, permite conectar a internet a través de cualquier enchufe por medio de un modem plc.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>POP (Post Office Protocol):</h4> Protocolo de Oficina de Correos. Protocolo diseñado para permitir a sistemas de usuario individual leer correo electrónico almacenado en un servidor.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>PPP (Point to Point Protocol):</h4> Protocolo de punto a punto. Se utiliza para la transmisión de información entre ordenadores por vía telefónica.</td>  <br> </tr>
        `;
        break;

        case "q":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>QR (Quick Response):</h4> Los códigos QR originarios de Japón, son los que vendrían a ser la evolución de los códigos de barras actuales. Se trata de un sistema para almacenar información en una matriz de puntos ideado por la compañía Denso Wave en 1994.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>query:</h4> Consulta. Búsqueda en una base de datos.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Quick Cam:</h4> Cámara de video digital que se conecta al puerto paralelo de la computadora y permite la realización de Vídeo-conferencia utilizando Internet.</td>  <br> </tr>
        `;
        break;

        case "r":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>Router:</h4> Enrutador. Originalmente, se identificaba con el término gateway, sobre todo en referencia a la red Internet.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Reset:</h4> Podría traducirse en español por «Reinicialización». Los ordenadores personales suelen incorporar un interruptor en la CPU que permite arrancar la máquina sin necesidad de cumplir las secuencias habituales de apagado y nuevo encendido.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>RAM Disk:</h4> Se refiere a la RAM que ha sido configurada para simular un disco duro. Se puede acceder a los ficheros de un RAM disk de la misma forma en la que se acceden a los de un disco duro.</td>  <br> </tr>
        `;
        break;

        case "s":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>Socket:</h4> Número de identificación compuesto por dos números: La dirección IP y el número de puerto TCP. En la misma red, el nº IP es el mismo, mientras el nº de puerto es el que varía.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Switch:</h4> Dispositivo de red que filtra, envía e inunda de frames en base a la dirección de destino de cada frame. El switch opera en la capa de enlace de datos del modelo OSI.  En general se aplica a un dispositivo electrónico o mecánico que permite establecer una conexión cuando resulte necesario y terminarla cuando ya no hay sesión alguna que soportar.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>SMTP (Simple Mail Transfer Protocol):</h4> Protocolo Simple de Trasferencia de Correo. Protocolo que se usa para trasmitir correo electrónico entre servidores.</td>  <br> </tr>
        `;
        break;

        case "t":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>TCP (Transmission Control Protocol):</h4> El protocolo TCP proporciona un servicio de comunicación que forma un circuito, es decir, que el flujo de datos entre el origen y el destino parece que sea continuo.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Telnet:</h4> Protocolo estándar de Internet que permite al usuario conectarse a un ordenador remoto y utilizarlo como si estuviera en una de sus terminales.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Tunneling:</h4> La tecnología de túneles -Tunneling- es un modo de transferir datos entre 2 redes similares sobre una red intermedia. También se llama “encapsulación”, a la tecnología de túneles que encierra un tipo de paquete de datos dentro del paquete de otro protocolo, que en este caso sería TCP/IP.</td>  <br> </tr>
        `;
        break;

        case "u":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>UDP:</h4> El protocolo UDP (User Datagram Protocol) proporciona aplicaciones con un tipo de servicio de datagramas orientado a transacciones. El servicio es muy parecido al protocolo IP, pero varía en el sentido de que no es fiable y no esta orientado a la conexión.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Ubuntu:</h4> Es una distribución Linux que ofrece un sistema operativo predominantemente enfocado a computadoras de escritorio aunque también proporciona soporte para servidores.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>U3:</h4> Se trata de una norma tanto para software como para hardware, que tiene la capacidad para guardar el entorno de una computadora personal de escritorio y los programas más frecuentemente usados, para abrirlo de nuevo en cualquier computadora disponible.</td>  <br> </tr>
        `;
        break;

        case "v":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>VPN (Virtual Private Network):</h4> Número de identificación compuesto por dos números: La dirección IP y el número de puerto TCP. En la misma red, el nº IP es el mismo, mientras el nº de puerto es el que varía.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>VCC (Virtual Chanel Connection):</h4> Conección de Canal Virtual. Esta definido como un encadenamiento de enlaces de canales virtuales.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>VCI (Virtual Chanel Identifier):</h4> Identificador de Canal Virtual. Es un valor de 16 bits en la cabecera de la celda ATM que provee un identificador único de un canal virtual.</td>  <br> </tr>
        `;
        break;

        case "w":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>WAN:</h4> Red de área amplia. Cualquier red pública es de este tipo. Su característica definitoria es que no tiene límites en cuanto a su amplitud.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>WWW (World Wide Web):</h4> Telaraña o malla mundial. Sistema de información con mecanismos de hipertexto creado por investigadores del CERN. Los usuarios pueden crear, editar y visualizar documentos de hipertexto.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>WAP (Wireless Application Protocol):</h4> Protocolo de Aplicaciones Inalámbricas. Es un estándar que define una nueva forma de acceso a datos a través del teléfono móvil.</td>  <br> </tr>
        `;
        break;

        case "x":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>XHTML:</h4> es un lenguaje similar a HTML, pero con algunas diferencias que lo hacen más robusto y aconsejable para la modelación de páginas web. Las siglas corresponden con las palabras inglesas eXtensible Hypertext Markup Language, que vendría a significar en castellano algo así como lenguaje extensible de marcación hipertexto.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>XAMPP :</h4> es un paquete de software libre, que consiste principalmente en el sistema de gestión de bases de datos MySQL, el servidor web Apache y los intérpretes para lenguajes de script PHP y Perl.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>X86:</h4> Nombre genérico que se suele dar a la familia de procesadores Intel basados en el 8086: el 8086 original y su variante 8088, 80286, 386, 486 y la actual gama Pentium (Pentium, Pentium Pro, Pentium MMX, Pentium II, Celeron).</td>  <br> </tr>
        `;
        break;

        case "y":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>Ymodem</h4> Es un protocolo de corrección de errores para modems. El funcionamiento se basa en la transmisión de paquetes de datos mayores para obtener mayor eficiencia. Los modems preparados para funcionar con este protocolo enviarán paquetes de 1024 bytes.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Yahoo:</h4> Yahoo! Inc. es una empresa global de medios con sede en Estados Unidos, cuya misión es "ser el servicio global de Internet más esencial para consumidores y negocios". Posee un portal de Internet, un directorio Web y una serie de servicios, incluido el popular correo electrónico Yahoo!.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Youtube:</h4> Es un sitio web que permite a los usuarios compartir vídeos digitales a través de Internet e incluso, permite a los músicos novatos y experimentados dar a conocer sus vídeos al mundo. Fue fundado en febrero de 2005 por tres antiguos empleados de PayPal: Chad Hurley, Steve Chen y Jawed Karim. YouTube es propiedad de Google, desde su compra, el 10 de octubre de 2006 por 1.650 millones de dólares.</td>  <br> </tr>
        `;
        break;

        case "z":

        tabla.innerHTML =`
                    <tr>     <td colspan="3"><h4>ZIF (Zero Insertion Force):</h4> Sistema utilizado en las placas base para facilitar el cambio de chips.</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>zip:</h4> Archivo comprimido que suele terminar con la extensión ".zip". El ZIP es un formato de compresión de datos sin pérdida. Resulta muy habitual utilizarlo cuando se quiere enviar varios archivos, ya que te permite crear un único fichero contenedor menos pesado que se puede adjuntar de golpe a un e-mail.﻿</td>  <br> </tr>

                    <tr>     <td colspan="3"><h4>Zoom:</h4> Acción que consiste en ampliar o disminuir la vista de uno o varios objetos con el fin de visualizar todo el documento o una parte del mismo.</td>  <br> </tr>
        `;
        break;

       }
    }       
}
