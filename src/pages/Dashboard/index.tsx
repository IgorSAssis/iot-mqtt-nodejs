import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

import "./styles.css";

function Dashboard() {

    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [isDeviceMenusHidden, setIsDeviceMenusHidden] = useState(true);

    function handleToggleSidebar() {

        setToggleSidebar(!toggleSidebar);

    }

    function handleToggleDeviceMenus() {

        setIsDeviceMenusHidden(!isDeviceMenusHidden);

    }

    return (

        <div id="dashboard-page">

            <div className="sidebar">

                <button type="button" id="toggle-sidebar" onClick={handleToggleSidebar}>
                    &gt;
                </button>

                <h1>Menu</h1>
                <div className="menu-option">
                    <button type="button" onClick={handleToggleDeviceMenus}>
                        <AiOutlinePlus color="#000" size={18} />
                    Dispositivos
                </button>
                    <div className={isDeviceMenusHidden ? "active" : ""}>
                        <a href="#">Medições</a>
                        <a href="#">Relatório</a>
                        <a href="#">Monitoramento</a>
                    </div>
                </div>


            </div>

            <div className="dashboard-page-content">

                <h1>Dashboard</h1>

                <button>Filtros</button>
                <div className="filter-container">

                    <div className="measurement-unit-wrapper">
                        <div>
                            <input id="voltage" name="measurementUnit" type="radio" value="Voltage" />
                            <label htmlFor="voltage">Tensão</label>
                        </div>

                        <div>
                            <input id="current" name="measurementUnit" type="radio" value="Current" />
                            <label htmlFor="current">Corrente</label>
                        </div>

                        <div>
                            <input id="frequency" name="measurementUnit" type="radio" value="Frequency" />
                            <label htmlFor="frequency">Frequência</label>
                        </div>

                        <div>
                            <input id="power" name="measurementUnit" type="radio" value="Power" />
                            <label htmlFor="power">Potência</label>
                        </div>
                    </div>

                    <div className="device-name-wrapper">
                        <label htmlFor="search-device">Nome do dispositivo</label>
                        <input id="search-device" type="text" placeholder="Ex: Pac 3200" />
                        <button type="button">
                            <AiOutlineSearch size={24}/>
                        </button>
                    </div>

                </div>

                <div className="device-data-container">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Dispositivo</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Valor medido</th>
                                <th scope="col">Horário</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pac 3200</td>
                                <td>Tensão</td>
                                <td>220.13 V</td>
                                <td>14:25:00 - 01-12-2020</td>
                            </tr>
                            <tr>
                                <td>Pac 3200</td>
                                <td>Tensão</td>
                                <td>220.13 V</td>
                                <td>14:25:00 - 01-12-2020</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    )

}

export default Dashboard;