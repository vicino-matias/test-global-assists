import React, {useState} from "react";
import data from './data/data.json'

const App = () =>{
    const [filters, setFilters] = useState({
      first_name:"",
      last_name:"",
      email:"",
      gender:"",
      ip_address:"",
      country:"",
    }); //Filtros de busqueda

    const [currentPage, setCurrentPage] = useState(1); //Pagina actual
    const rowsPerPage = 10; //Numero de filas por pagina

    //Obtener la primera columna filtrada para ordenar (columna predeterminada: id)
    const activeFilter = Object.keys(filters).find(key => filters[key].length > 0) || "id";

    //Filtrar datos segun los filtros
    const filteredData = data.filter((item) =>
      Object.keys(filters).every((key) =>
        item[key].toString().toLowerCase().includes(filters[key].toLowerCase())
  )
).sort((a, b) => {
  //Se agrega una validacion en caso de que haya datos undefined
  const valueA = a[activeFilter]?.toString().toLowerCase() || "";
  const valueB = b[activeFilter]?.toString().toLowerCase() || "";
  const filterValue = filters[activeFilter]?.toLowerCase() || "";

  //Priorizar coincidencias exactas
  const isMatchA = valueA === filterValue ? -1 : 0;
  const isMatchB = valueB === filterValue ? -1 : 0;

  if(isMatchA !== isMatchB){
    return isMatchA - isMatchB;
  }

  return valueA.localeCompare(valueB, undefined, {numeric: true});
})

    //Calcular el indice y fin de la pagina actual
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    //Filtrar datos para la pagina actual
    const paginatedData = filteredData.slice(startIndex, endIndex);

    //Numero total de paginas
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    //Actualizar un filtro especifico
    const handleFilterChange = (key, value) =>{
      setFilters({
        ...filters,
        [key]: value,
      });
      setCurrentPage(1); //Reiniciar a la pagina 1 al filtrar
    };

  return (
    <div>
        <h1>Customer Grid</h1>
        <table border="1">
            <thead>
                <tr>
                <th>Id</th>
                    <th>
                        First Name
                        <br/>
                        <input
                            type="text"
                            onChange={(e) => handleFilterChange("first_name", e.target.value)}
                            placeholder="Filter by first name"
                        />
                    </th>
                    <th>
                        Last Name
                        <br/>
                        <input
                            type="text"
                            onChange={(e) => handleFilterChange("last_name", e.target.value)}
                            placeholder="Filter by last name"
                        />
                    </th>
                    <th>
                        Email
                        <br/>
                        <input
                            type="text"
                            onChange={(e) => handleFilterChange("email", e.target.value)}
                            placeholder="Filter by email"
                        />
                    </th>
                    <th>
                        Gender
                        <br/>
                        <input
                            type="text"
                            onChange={(e) => handleFilterChange("gender", e.target.value)}
                            placeholder="Filter by gender"
                        />
                    </th>
                    <th>
                        IP address
                        <br/>
                        <input
                            type="text"
                            onChange={(e) => handleFilterChange("ip_address", e.target.value)}
                            
                            placeholder="Filter by IP address"
                        />
                    </th>
                    <th>
                        Country
                        <br/>
                        <input
                            type="text"
                            onChange={(e) => handleFilterChange("country", e.target.value)}
                            placeholder="Filter by country"
                        />
                    </th>
                </tr>
            </thead>
            <tbody>
                {paginatedData.map((item) =>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                        <td>{item.ip_address}</td>
                        <td>{item.country}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        {/*Paginacion*/}
        <div className="pagination">
          <button
            onClick={()=>setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}>Previous</button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled= {currentPage === totalPages}>Next</button>
        </div>
    </div>

    
    );
    
};

export default App
