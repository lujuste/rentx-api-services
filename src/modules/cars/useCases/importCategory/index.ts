import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

const categoriesRepository = null;
const importCategoryUseCase = new ImportCategoryUseCase()
const importCategoryController = new ImportCategoryController(importCategoryUseCase)


export {importCategoryController}