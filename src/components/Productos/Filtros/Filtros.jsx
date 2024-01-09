import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Collapse,
  Divider,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { RestartAlt,Add, Remove } from "@mui/icons-material";
import { filters } from '../../../Data/data.js'


const Filtros = ({onFilterChange}) => {
  const [openFilters, setOpenFilters] = React.useState({});
  const [filterValues, setFilterValues] = React.useState({});

  const handleToggleFilter = (filterLabel) => {
    setOpenFilters((prevOpenFilters) => ({
      ...prevOpenFilters,
      [filterLabel]: !prevOpenFilters[filterLabel],
    }));
  };

  const handleFilterChange = (event) => {
    setFilterValues((prevFilterValues) => ({
      ...prevFilterValues,
      [event.target.name]: event.target.value,
    }));
    // Llama a la función onFilterChange con los nuevos valores de filtro
    onFilterChange({
      ...filterValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleAutocompleteChange = (event, value, filterLabel) => {
    setFilterValues((prevFilterValues) => ({
      ...prevFilterValues,
      [filterLabel]: value,
    }));
    // Llama a la función onFilterChange con los nuevos valores de filtro
    onFilterChange({
      ...filterValues,
      [filterLabel]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    setFilterValues((prevFilterValues) => ({
      ...prevFilterValues,
      [event.target.name]: event.target.checked
        ? [...(prevFilterValues[event.target.name] || []), event.target.value]
        : prevFilterValues[event.target.name].filter(
            (value) => value !== event.target.value
          ),
    }));
    // Llama a la función onFilterChange con los nuevos valores de filtro
    onFilterChange({
      ...filterValues,
      [event.target.name]: event.target.checked
        ? [...(filterValues[event.target.name] || []), event.target.value]
        : filterValues[event.target.name].filter(
            (value) => value !== event.target.value
          ),
    });
  };

  const handleResetAll = () => {
    setOpenFilters({});
    setFilterValues({});
    // Llama a la función onFilterChange con un objeto vacío para reiniciar los filtros
    onFilterChange({});
  };
  return (
    <Box sx={{ bgcolor: "rgba(255, 255, 255, 0.35)", borderRadius: "1rem", width: "88%", p: "1rem", }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box fontSize="h6.fontSize" fontWeight="bold">
          Filtrar
        </Box>
        <Button size="sm" variant="text" color="primary" onClick={handleResetAll}>
          <RestartAlt 
          sx={{
            color: "#FF919D",
            marginLeft: "0.5rem"
          }}/>
        </Button>
      </Box>
      <List>
        {filters.map((filter, index) => (
          <React.Fragment key={filter.label}>
            <ListItem button onClick={() => handleToggleFilter(filter.label)}>
              <ListItemText primary={filter.label} />
              {openFilters[filter.label] ? (
                <Remove sx={{ color: filter.required ? "#FF919D" : undefined }} />
              ) : (
                <Add sx={{ color: filter.required ? "#FF919D" : undefined }} />
              )}
            </ListItem>
            <Collapse
              in={openFilters[filter.label]}
              timeout="auto"
              unmountOnExit
            >
              {filter.type === "autocomplete" && (
                <ListItem sx={{ pl: 4 }}>
                  <Autocomplete
                    options={filter.options}
                    renderInput={(params) => (
                      <TextField {...params} label={filter.label} fullWidth />
                    )}
                    onChange={(event, value) =>
                      handleAutocompleteChange(event, value, filter.label)
                    }
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        border: "none",
                      },
                    }}
                  />
                </ListItem>
              )}
              {filter.type === "select" && (
                <ListItem sx={{ pl: 4 }}>
                  <FormControl fullWidth>
                    <InputLabel>{filter.label}</InputLabel>
                    <Select
                      label={filter.label}
                      name={filter.label}
                      value={filterValues[filter.label] || ""}
                      onChange={handleFilterChange}
                    >
                      {filter.options.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </ListItem>
              )}
              {filter.type === "checkbox" && (
                <List component="div" disablePadding>
                  {filter.options.map((option) => (
                    <ListItem key={option} button sx={{ pl: 4 }}>
                      <Checkbox
                        checked={
                          (Array.isArray(filterValues[filter.label]) &&
                            filterValues[filter.label].includes(option)) ||
                          false
                        }
                        onChange={handleCheckboxChange}
                        name={filter.label}
                        value={option}
                        sx={{
                          "&.Mui-checked": {
                            color: "#FF919D",
                          },
                        }}
                      />
                      <ListItemText primary={option} />
                    </ListItem>
                  ))}
                </List>
              )}
            </Collapse>
            {index < filters.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Filtros;
