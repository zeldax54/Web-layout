$(document).ready(function(){
	IniciarTabla('cargaMasivaUsers',[0,3,5,6,7]);
	IniciarTabla('listado_eventos',[0,2,3]);
	IniciarTabla('listado_participantes',[0,2,3,4,5]);
	})


function IniciarTabla(tablaid,colorder) {
    $('#' + tablaid).dataTable({
        language: {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "No hay Datos en esta Tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "No se han encontrado registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": '<span class="glyphicon glyphicon-search" style="margin-left:30px"></span>',
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "�ltimo",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
        responsive: true,
        //  dom: 'T<"clear">lfrtip',
        tableTools: {
            "aButtons": [
                "print"
            ],
            "sSwfPath": "../Content/DataTables/swf/copy_csv_xls_pdf.swf"

        },
        dom: 'Bfrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5'],
			 
			 "columnDefs": [
			 
               {
               "targets": colorder,               
               "orderable": false,
			   }
			]
			
    });
}

$('.editBoton').click(function(){
    $('#editUserModal').modal('show');
});

$('#listado_participantes tr td').click(function(){
	 $('#qrUserModal').modal('show');
	
});