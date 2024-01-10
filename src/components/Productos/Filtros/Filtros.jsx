import React, { useState } from "react";
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
import { RestartAlt, Add, Remove } from "@mui/icons-material";
import { filters } from "../../../Data/data.js";


const Filtros = ({ filteredStock, onFilterChange }) => {
  const [openFilters, setOpenFilters] = useState({});
  const [filterValues, setFilterValues] = useState({});

  const handleCheckboxChange = (e) => {
    const selectedCategory = e.target.value;
    setFilterValues({ checkbox: selectedCategory });
    onFilterChange({ checkbox: selectedCategory });
  };

  const handleFilterChange = (e, value, filterLabel) => {
    setFilterValues({ [filterLabel]: value });
    onFilterChange({ [filterLabel]: value });
  };


  const handleResetFilters = () => {
    setFilterValues({});
    onFilterChange({});
  };

  return (
    <Box
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.35)",
        borderRadius: "1rem",
        width: "88%",
        p: "1rem",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box fontSize="h6.fontSize" fontWeight="bold">
          Filtrar
        </Box>
        <Button size="sm" variant="text" color="primary" onClick ={handleResetFilters}>
          <RestartAlt
            sx={{
              color: "#FF919D",
              marginLeft: "0.5rem",
            }}
          />
        </Button>
      </Box>
      <List>
        {filters.map((filter, index) => (
          <React.Fragment key={filter.label}>
            <ListItem
              button
              onClick={() =>
                setOpenFilters((prevOpenFilters) => ({
                  ...prevOpenFilters,
                  [filter.label]: !prevOpenFilters[filter.label],
                }))
              }
            >
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
                      handleFilterChange(event, value, filter.label)
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
                      onChange={(event) =>
                        handleFilterChange(event, event.target.value, filter.label)
                      }
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
