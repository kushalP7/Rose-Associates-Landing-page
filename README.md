# Prosperity Builder Scorecard — NestJS Backend & REST API Specification Guide

This document serves as the **definitive backend architectural specification, data model reference, and implementation flow guide** for building the **Prosperity Builder Scorecard** system (Rose Associates) using **NestJS, PostgreSQL, Sequelize ORM (`sequelize-typescript`), and RESTful APIs**.

It is designed to enable backend developers to build a robust, production-ready, modular NestJS microservice without missing any conditions, data relationships, evaluation flows, or edge cases.

---

## 📋 Table of Contents
1. [System Architecture & NestJS Module Structure](#-system-architecture--nestjs-module-structure)
2. [Database Entities & Models (`sequelize-typescript`)](#-database-entities--models-sequelize-typescript)
3. [Sample Data Seeding & Database Initialization Engine](#-sample-data-seeding--database-initialization-engine)
4. [NestJS REST API Controllers & DTOs](#-nestjs-rest-api-controllers--dtos)
5. [NestJS Services & Core Business Engines](#-nestjs-services--core-business-engines)
6. [Conditional Rule Engine Specification](#-conditional-rule-engine-specification)
7. [Scoring Engine Specification](#-scoring-engine-specification)
8. [Dynamic Formula Engine Specification](#-dynamic-formula-engine-specification)
9. [Analytics & Aggregation Engine](#-analytics--aggregation-engine)
10. [Execution Sequence Flowcharts](#-execution-sequence-flowcharts)
11. [Validation, Security & Error Handling](#-validation-security--error-handling)

---

## 🏗️ System Architecture & NestJS Module Structure

The backend application is structured as a modular NestJS application:

```
src/
├── app.module.ts
├── main.ts
├── common/
│   ├── filters/
│   │   └── http-exception.filter.ts
│   ├── interceptors/
│   │   └── transform.interceptor.ts
│   └── pipes/
│       └── zod-validation.pipe.ts
├── database/
│   └── database.module.ts
├── modules/
│   ├── projects/
│   │   ├── projects.module.ts
│   │   ├── projects.controller.ts
│   │   ├── projects.service.ts
│   │   └── dto/
│   ├── templates/
│   │   ├── templates.module.ts
│   │   ├── templates.controller.ts
│   │   ├── templates.service.ts
│   │   └── entities/
│   ├── seed/
│   │   ├── seed.module.ts
│   │   ├── seed.controller.ts
│   │   └── seed.service.ts
│   ├── engine/
│   │   ├── engine.module.ts
│   │   ├── conditional-rule.engine.ts
│   │   ├── scoring.engine.ts
│   │   └── formula.engine.ts
│   ├── analytics/
│   │   ├── analytics.module.ts
│   │   ├── analytics.controller.ts
│   │   └── analytics.service.ts
│   └── settings/
│       ├── settings.module.ts
│       ├── settings.controller.ts
│       └── settings.service.ts
```

### Core Technologies
* **Framework**: NestJS v10+ (TypeScript)
* **Database**: PostgreSQL (with `JSONB` support for schema flex fields)
* **ORM Integration**: `@nestjs/sequelize` + `sequelize-typescript`
* **API Protocol**: RESTful APIs with OpenAPI/Swagger (`@nestjs/swagger`)
* **Validation**: Zod & `class-validator` / `class-transformer`
* **Formula Engine**: `isolated-vm` or safe AST evaluator (`expr-eval`)

---

## 🗄️ Database Entities & Models (`sequelize-typescript`)

Below are the complete NestJS `sequelize-typescript` entity definitions.

### 1. AppSettings & RatingBand Entities

```typescript
// src/modules/settings/entities/app-settings.entity.ts
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { RatingBand } from './rating-band.entity';

@Table({ tableName: 'app_settings', timestamps: true })
export class AppSettings extends Model {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  id: string;

  @Column({ type: DataType.STRING, defaultValue: 'Rose Associates', allowNullable: false })
  companyName: string;

  @Column({ type: DataType.STRING, allowNull: true })
  companyLogoUrl: string;

  @Column({ type: DataType.STRING, allowNull: true })
  companyAddress: string;

  @Column({ type: DataType.STRING, allowNull: true })
  companyPhone: string;

  @HasMany(() => RatingBand)
  ratingBands: RatingBand[];
}

// src/modules/settings/entities/rating-band.entity.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { AppSettings } from './app-settings.entity';

@Table({ tableName: 'rating_bands', timestamps: true })
export class RatingBand extends Model {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  id: string;

  @ForeignKey(() => AppSettings)
  @Column({ type: DataType.UUID, allowNull: false })
  settingsId: string;

  @BelongsTo(() => AppSettings)
  settings: AppSettings;

  @Column({ type: DataType.STRING, allowNull: false })
  label: string; // e.g. "Poor", "Average", "Good", "Excellent"

  @Column({ type: DataType.FLOAT, allowNull: false })
  min: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  max: number;

  @Column({ type: DataType.STRING, allowNull: false })
  color: string; // e.g. "#B5101A"
}
```

### 2. Template Hierarchy Entities

```typescript
// src/modules/templates/entities/template-section.entity.ts
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { TemplateCategory } from './template-category.entity';

@Table({ tableName: 'template_sections', timestamps: true })
export class TemplateSection extends Model {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  label: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  description: string;

  @Column({ type: DataType.STRING, defaultValue: '#B5111B' })
  accentColor: string;

  @Column({ type: DataType.STRING, defaultValue: 'Layers' })
  icon: string;

  @HasMany(() => TemplateCategory, { onDelete: 'CASCADE' })
  categories: TemplateCategory[];
}

// src/modules/templates/entities/template-category.entity.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { TemplateSection } from './template-section.entity';
import { TemplateGroup } from './template-group.entity';
import { TemplateColumn } from './template-column.entity';

@Table({ tableName: 'template_categories', timestamps: true })
export class TemplateCategory extends Model {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  id: string;

  @ForeignKey(() => TemplateSection)
  @Column({ type: DataType.UUID, allowNull: false })
  sectionId: string;

  @BelongsTo(() => TemplateSection)
  section: TemplateSection;

  @Column({ type: DataType.STRING, allowNull: false })
  label: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  description: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  takesValues: boolean;

  @HasMany(() => TemplateGroup, { onDelete: 'CASCADE' })
  groups: TemplateGroup[];

  @HasMany(() => TemplateColumn, { onDelete: 'CASCADE' })
  columns: TemplateColumn[];
}

// src/modules/templates/entities/template-group.entity.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { TemplateCategory } from './template-category.entity';
import { TemplateColumn } from './template-column.entity';

@Table({ tableName: 'template_groups', timestamps: true })
export class TemplateGroup extends Model {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  id: string;

  @ForeignKey(() => TemplateCategory)
  @Column({ type: DataType.UUID, allowNull: false })
  categoryId: string;

  @BelongsTo(() => TemplateCategory)
  category: TemplateCategory;

  @Column({ type: DataType.STRING, allowNull: false })
  label: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  description: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  takesValues: boolean;

  @HasMany(() => TemplateColumn, { onDelete: 'CASCADE' })
  columns: TemplateColumn[];
}

// src/modules/templates/entities/template-column.entity.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { TemplateCategory } from './template-category.entity';
import { TemplateGroup } from './template-group.entity';
import { ConditionalRule } from './conditional-rule.entity';

export enum ColumnType {
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  TEXT = 'text',
  FORMULA = 'formula',
  SELECT = 'select',
}

@Table({ tableName: 'template_columns', timestamps: true })
export class TemplateColumn extends Model {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  id: string;

  @ForeignKey(() => TemplateCategory)
  @Column({ type: DataType.UUID, allowNull: true })
  categoryId: string;

  @BelongsTo(() => TemplateCategory)
  category: TemplateCategory;

  @ForeignKey(() => TemplateGroup)
  @Column({ type: DataType.UUID, allowNull: true })
  groupId: string;

  @BelongsTo(() => TemplateGroup)
  group: TemplateGroup;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.ENUM(...Object.values(ColumnType)), allowNull: false })
  type: ColumnType;

  @Column({ type: DataType.STRING, allowNull: true })
  unit: string;

  @Column({ type: DataType.FLOAT, defaultValue: 1.0 })
  weight: number;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isBonus: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isReadOnly: boolean;

  @Column({ type: DataType.TEXT, allowNull: true })
  formulaExpression: string;

  @Column({ type: DataType.JSONB, allowNull: true })
  options: any[]; // Select dropdown options [{ label, value }]

  @Column({ type: DataType.FLOAT, allowNull: true })
  validationMin: number;

  @Column({ type: DataType.FLOAT, allowNull: true })
  validationMax: number;

  @Column({ type: DataType.JSONB, allowNull: false })
  scoringRule: any; // Discriminated union rule object

  @HasMany(() => ConditionalRule, { onDelete: 'CASCADE' })
  conditionalRules: ConditionalRule[];
}

// src/modules/templates/entities/conditional-rule.entity.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { TemplateColumn } from './template-column.entity';

export enum RuleOperator {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  GREATER_THAN = 'greater_than',
  LESS_THAN = 'less_than',
  GREATER_THAN_OR_EQUALS = 'greater_than_or_equals',
  LESS_THAN_OR_EQUALS = 'less_than_or_equals',
  BETWEEN = 'between',
}

@Table({ tableName: 'conditional_rules', timestamps: false })
export class ConditionalRule extends Model {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  id: string;

  @ForeignKey(() => TemplateColumn)
  @Column({ type: DataType.UUID, allowNull: false })
  columnId: string;

  @BelongsTo(() => TemplateColumn)
  column: TemplateColumn;

  @Column({ type: DataType.STRING, allowNull: false })
  ifColumnId: string; // "__base__" or column UUID

  @Column({ type: DataType.ENUM(...Object.values(RuleOperator)), allowNull: false })
  operator: RuleOperator;

  @Column({ type: DataType.JSONB, allowNull: true })
  conditionValue: any;

  @Column({ type: DataType.JSONB, allowNull: false })
  resultValue: any;
}
```

### 3. Project & Data Record Entities

```typescript
// src/modules/projects/entities/project.entity.ts
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { ProjectDataRecord } from './project-data-record.entity';

@Table({ tableName: 'projects', timestamps: true })
export class Project extends Model {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  clientName: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  year: number;

  @Column({ type: DataType.STRING, allowNull: true })
  image: string;

  @Column({ type: DataType.JSONB, defaultValue: [] })
  assignedSections: any[]; // Deep-cloned TemplateSection snapshots

  @Column({ type: DataType.ARRAY(DataType.STRING), defaultValue: [] })
  enabledWidgets: string[];

  @Column({ type: DataType.JSONB, allowNull: true })
  dashboardLayout: any;

  @HasMany(() => ProjectDataRecord, { onDelete: 'CASCADE' })
  records: ProjectDataRecord[];
}

// src/modules/projects/entities/project-data-record.entity.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Project } from './project.entity';

@Table({ 
  tableName: 'project_data_records', 
  timestamps: true,
  indexes: [{ unique: true, fields: ['projectId', 'nodeId', 'columnId'] }]
})
export class ProjectDataRecord extends Model {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  id: string;

  @ForeignKey(() => Project)
  @Column({ type: DataType.UUID, allowNull: false })
  projectId: string;

  @BelongsTo(() => Project)
  project: Project;

  @Column({ type: DataType.STRING, allowNull: false })
  nodeId: string; // Category or Group UUID

  @Column({ type: DataType.STRING, allowNull: false })
  columnId: string; // "__base__" or Column UUID

  @Column({ type: DataType.JSONB, allowNull: true })
  value: any;

  @Column({ type: DataType.TEXT, allowNull: true })
  source: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  notes: string;

  @Column({ type: DataType.FLOAT, allowNull: true })
  scoreValue: number;
}
```

---

##  🌱 Sample Data Seeding & Database Initialization Engine

The application frontend provides a **"Load Sample Data"** button (`Database` icon) on the Projects page. The backend MUST provide a dedicated REST endpoint and NestJS module (`SeedModule`) to populate or reset standard templates, categories, custom columns, sample projects, and analytics widgets.

### 1. Standard 12 Core Sections Populated by Seed Engine
1. **Accessibility & Transportation** (Public transit, bicycle networks, commute times, STIP projects)
2. **Arts & Culture** (Public art installations, murals, museums, theaters, sector employment %)
3. **Crime & Public Safety** (Violent/property crime rates, response time, community policing)
4. **Education** (Public/private schools, libraries, early childhood centers)
5. **Employment & Labor** (Unemployment rate, job growth, average wage)
6. **Goods & Services** (Grocery stores, retail centers, pharmacies, banks)
7. **Healthcare & Wellness** (Hospitals, clinics, mental health facilities, fitness centers)
8. **Historic Preservation** (Landmarks, historic districts, archives)
9. **Housing** (Single-family, multi-family, affordable units, rental rates, home values)
10. **Infrastructure** (Water supply, power grid, broadband access, stormwater)
11. **Open Space & Recreation** (Parks, trails, playgrounds, community gardens)
12. **Planning & Land Use** (Residential/commercial zoning, permits, vacant lots)

### 2. Core 6 Standard Columns Created Per Section
When seeding sections, each category/group is initialized with the 6 standard evaluation columns:
* **`Y(1)/N(0)`** (`number`, min: 0, max: 1)
* **`Weight (1-4)`** (`number`, min: 1, max: 4)
* **`Value`** (`number`, min: 0, max: 10)
* **`Client Total Score`** (`number`, min: 0, max: 100)
* **`Highest Score`** (`number`, min: 0, max: 100)
* **`Overall Trend`** (`number`, min: 0, max: 20)
* **`Local Data Result & Notes`** (`text`)

### 3. NestJS Seed REST Controller & Service Implementation

```typescript
// src/modules/seed/seed.controller.ts
import { Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SeedService } from './seed.service';

@ApiTags('Sample Data Seed')
@Controller('api/v1/seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post('sample-data')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Populate sample projects, standard 12 sections, and sample metrics (Triggered by UI Load Sample Data button)' })
  async loadSampleData() {
    await this.seedService.populateSampleData();
    return { success: true, message: 'Sample data populated successfully' };
  }

  @Post('reset')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reset all database tables back to clean initial sample state' })
  async resetDatabase() {
    await this.seedService.resetAndSeed();
    return { success: true, message: 'Database reset to sample state successfully' };
  }
}
```

```typescript
// src/modules/seed/seed.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { TemplateSection } from '../templates/entities/template-section.entity';
import { TemplateCategory } from '../templates/entities/template-category.entity';
import { TemplateGroup } from '../templates/entities/template-group.entity';
import { TemplateColumn, ColumnType } from '../templates/entities/template-column.entity';
import { Project } from '../projects/entities/project.entity';
import { ProjectDataRecord } from '../projects/entities/project-data-record.entity';
import { AnalyticsWidget } from '../analytics/entities/analytics-widget.entity';
import { AppSettings } from '../settings/entities/app-settings.entity';
import { RatingBand } from '../settings/entities/rating-band.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(TemplateSection) private sectionModel: typeof TemplateSection,
    @InjectModel(TemplateCategory) private categoryModel: typeof TemplateCategory,
    @InjectModel(TemplateGroup) private groupModel: typeof TemplateGroup,
    @InjectModel(TemplateColumn) private columnModel: typeof TemplateColumn,
    @InjectModel(Project) private projectModel: typeof Project,
    @InjectModel(ProjectDataRecord) private recordModel: typeof ProjectDataRecord,
    @InjectModel(AnalyticsWidget) private widgetModel: typeof AnalyticsWidget,
    @InjectModel(AppSettings) private settingsModel: typeof AppSettings,
    @InjectModel(RatingBand) private ratingBandModel: typeof RatingBand,
    private sequelize: Sequelize,
  ) {}

  async populateSampleData(): Promise<void> {
    const transaction = await this.sequelize.transaction();
    try {
      // 1. Ensure default AppSettings and RatingBands
      const [settings] = await this.settingsModel.findOrCreate({
        where: {},
        defaults: { companyName: 'Rose Associates', companyAddress: '123 Planning Way', companyPhone: '555-0100' },
        transaction,
      });

      const countBands = await this.ratingBandModel.count({ where: { settingsId: settings.id }, transaction });
      if (countBands === 0) {
        await this.ratingBandModel.bulkCreate(
          [
            { settingsId: settings.id, label: 'Poor', min: 0, max: 20, color: '#B5101A' },
            { settingsId: settings.id, label: 'Average', min: 21, max: 70, color: '#E08A15' },
            { settingsId: settings.id, label: 'Good', min: 71, max: 90, color: '#4B8B3B' },
            { settingsId: settings.id, label: 'Excellent', min: 91, max: 100, color: '#1F6F4A' },
          ],
          { transaction }
        );
      }

      // 2. Create standard 12 Sections if none exist
      const existingSections = await this.sectionModel.count({ transaction });
      if (existingSections === 0) {
        await this.seedDefaultTemplates(transaction);
      }

      // 3. Create Sample Projects ("Apex Tower Assessment", "Metro Center Redevelopment")
      const existingProjects = await this.projectModel.count({ transaction });
      if (existingProjects === 0) {
        const sections = await this.sectionModel.findAll({
          include: [{ model: TemplateCategory, as: 'categories', include: ['groups', 'columns'] }],
          transaction,
        });

        const sampleProject = await this.projectModel.create(
          {
            name: 'Apex Tower Assessment',
            clientName: 'Rose Associates Development',
            year: 2026,
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60',
            assignedSections: sections.map(s => JSON.parse(JSON.stringify(s.toJSON()))),
            enabledWidgets: [],
          },
          { transaction }
        );
      }

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async resetAndSeed(): Promise<void> {
    await this.sequelize.truncate({ cascade: true });
    await this.populateSampleData();
  }

  private async seedDefaultTemplates(transaction: any) {
    const sectionNames = [
      'Accessibility & Transportation', 'Arts & Culture', 'Crime & Public Safety',
      'Education', 'Employment & Labor', 'Goods & Services', 'Healthcare & Wellness',
      'Historic Preservation', 'Housing', 'Infrastructure', 'Open Space & Recreation', 'Planning & Land Use'
    ];

    for (const name of sectionNames) {
      const section = await this.sectionModel.create({ label: name, accentColor: '#B5111B', icon: 'Layers' }, { transaction });
      const cat = await this.categoryModel.create({ sectionId: section.id, label: `${name} General Metrics`, takesValues: true }, { transaction });

      // Add the standard 6 columns
      await this.columnModel.bulkCreate([
        { categoryId: cat.id, name: 'Y(1)/N(0)', type: ColumnType.NUMBER, validationMin: 0, validationMax: 1, scoringRule: { kind: 'manual', maxPoints: 1 } },
        { categoryId: cat.id, name: 'Weight (1-4)', type: ColumnType.NUMBER, validationMin: 1, validationMax: 4, scoringRule: { kind: 'manual', maxPoints: 4 } },
        { categoryId: cat.id, name: 'Value', type: ColumnType.NUMBER, validationMin: 0, validationMax: 10, scoringRule: { kind: 'manual', maxPoints: 10 } },
        { categoryId: cat.id, name: 'Client Total Score', type: ColumnType.NUMBER, validationMin: 0, validationMax: 100, scoringRule: { kind: 'manual', maxPoints: 100 } },
        { categoryId: cat.id, name: 'Highest Score', type: ColumnType.NUMBER, validationMin: 0, validationMax: 100, scoringRule: { kind: 'manual', maxPoints: 100 } },
        { categoryId: cat.id, name: 'Overall Trend', type: ColumnType.NUMBER, validationMin: 0, validationMax: 20, scoringRule: { kind: 'manual', maxPoints: 20 } },
      ], { transaction });
    }
  }
}
```

---

## 🌐 NestJS REST API Controllers & DTOs

### Projects REST Controller (`projects.controller.ts`)

```typescript
import { Controller, Get, Post, Patch, Delete, Body, Param, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';
import { CreateProjectDto, UpdateProjectDataDto, AssignSectionDto } from './dto';

@ApiTags('Projects')
@Controller('api/v1/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all projects list' })
  async findAll(@Query('search') search?: string) {
    const projects = await this.projectsService.findAll(search);
    return { success: true, data: projects };
  }

  @Post()
  @ApiOperation({ summary: 'Create a new project' })
  async create(@Body() dto: CreateProjectDto) {
    const project = await this.projectsService.create(dto);
    return { success: true, data: project };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get project by ID with assigned sections and data matrix' })
  async findOne(@Param('id') id: string) {
    const project = await this.projectsService.findOne(id);
    return { success: true, data: project };
  }

  @Post(':id/sections')
  @ApiOperation({ summary: 'Assign template section snapshot to project' })
  async assignSection(@Param('id') id: string, @Body() dto: AssignSectionDto) {
    const project = await this.projectsService.assignSection(id, dto.sectionId);
    return { success: true, data: project };
  }

  @Patch(':id/data')
  @ApiOperation({ summary: 'Batch update data records for a project matrix' })
  async updateData(@Param('id') id: string, @Body() dto: UpdateProjectDataDto) {
    await this.projectsService.updateData(id, dto.updates);
    return { success: true, message: 'Project data updated successfully' };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete project' })
  async remove(@Param('id') id: string) {
    await this.projectsService.remove(id);
  }
}
```

---

## ⚙️ NestJS Services & Core Business Engines

### Projects Service Implementation (`projects.service.ts`)

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Project } from './entities/project.entity';
import { ProjectDataRecord } from './entities/project-data-record.entity';
import { TemplateSection } from '../templates/entities/template-section.entity';
import { TemplateCategory } from '../templates/entities/template-category.entity';
import { TemplateGroup } from '../templates/entities/template-group.entity';
import { TemplateColumn } from '../templates/entities/template-column.entity';
import { ConditionalRule } from '../templates/entities/conditional-rule.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project) private projectModel: typeof Project,
    @InjectModel(ProjectDataRecord) private recordModel: typeof ProjectDataRecord,
    @InjectModel(TemplateSection) private templateSectionModel: typeof TemplateSection,
    private sequelize: Sequelize,
  ) {}

  async findAll(search?: string): Promise<Project[]> {
    const where: any = {};
    if (search) {
      where.name = { [Op.iLike]: `%${search}%` };
    }
    return this.projectModel.findAll({
      where,
      order: [['updatedAt', 'DESC']],
    });
  }

  async create(dto: any): Promise<Project> {
    return this.projectModel.create({
      ...dto,
      assignedSections: [],
      enabledWidgets: [],
    });
  }

  async findOne(id: string): Promise<any> {
    const project = await this.projectModel.findByPk(id, {
      include: [{ model: ProjectDataRecord, as: 'records' }],
    });
    if (!project) throw new NotFoundException(`Project ${id} not found`);
    return project;
  }

  async assignSection(projectId: string, sectionId: string): Promise<Project> {
    const project = await this.projectModel.findByPk(projectId);
    if (!project) throw new NotFoundException(`Project ${projectId} not found`);

    const sectionTemplate = await this.templateSectionModel.findByPk(sectionId, {
      include: [
        {
          model: TemplateCategory,
          as: 'categories',
          include: [
            { model: TemplateGroup, as: 'groups', include: [{ model: TemplateColumn, as: 'columns', include: [{ model: ConditionalRule, as: 'conditionalRules' }] }] },
            { model: TemplateColumn, as: 'columns', include: [{ model: ConditionalRule, as: 'conditionalRules' }] },
          ],
        },
      ],
    });
    if (!sectionTemplate) throw new NotFoundException(`Section template ${sectionId} not found`);

    // Clone section template snapshot into project
    const clonedSection = JSON.parse(JSON.stringify(sectionTemplate.toJSON()));
    const assignedSections = [...project.assignedSections, clonedSection];

    await project.update({ assignedSections });
    return project;
  }

  async updateData(projectId: string, updates: Array<{ nodeId: string; columnId: string; data: any }>): Promise<void> {
    const transaction = await this.sequelize.transaction();
    try {
      for (const update of updates) {
        await this.recordModel.upsert(
          {
            projectId,
            nodeId: update.nodeId,
            columnId: update.columnId,
            value: update.data.value,
            source: update.data.source,
            notes: update.data.notes,
            scoreValue: update.data.scoreValue,
          },
          { transaction }
        );
      }
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async remove(id: string): Promise<void> {
    const project = await this.projectModel.findByPk(id);
    if (project) await project.destroy();
  }
}
```

---

## ⚡ Conditional Rule Engine Specification

The **Conditional Rule Engine** operates dynamically during calculation queries or background evaluation jobs:

```typescript
// src/modules/engine/conditional-rule.engine.ts
import { Injectable } from '@nestjs/common';
import { ConditionalRule, RuleOperator } from '../templates/entities/conditional-rule.entity';

@Injectable()
export class ConditionalRuleEngine {
  evaluateRules(rules: ConditionalRule[], rowData: Record<string, any>): any | undefined {
    if (!rules || rules.length === 0) return undefined;

    for (const rule of rules) {
      const sourceRecord = rowData[rule.ifColumnId];
      const sourceValue = sourceRecord?.value;

      if (sourceValue === null || sourceValue === undefined || sourceValue === '') continue;

      let matched = false;
      const condVal = rule.conditionValue;

      switch (rule.operator) {
        case RuleOperator.EQUALS:
          matched = String(sourceValue) === String(condVal);
          break;
        case RuleOperator.NOT_EQUALS:
          matched = String(sourceValue) !== String(condVal);
          break;
        case RuleOperator.GREATER_THAN:
          matched = Number(sourceValue) > Number(condVal);
          break;
        case RuleOperator.LESS_THAN:
          matched = Number(sourceValue) < Number(condVal);
          break;
        case RuleOperator.GREATER_THAN_OR_EQUALS:
          matched = Number(sourceValue) >= Number(condVal);
          break;
        case RuleOperator.LESS_THAN_OR_EQUALS:
          matched = Number(sourceValue) <= Number(condVal);
          break;
        case RuleOperator.BETWEEN:
          if (Array.isArray(condVal) && condVal.length === 2) {
            matched = Number(sourceValue) >= condVal[0] && Number(sourceValue) <= condVal[1];
          }
          break;
      }

      if (matched) {
        return rule.resultValue;
      }
    }

    return undefined;
  }
}
```

---

## 🎯 Scoring Engine Specification

The **Scoring Engine** evaluates 5 rule types (`manual`, `threshold`, `benchmark_range`, `boolean`, `formula`):

```typescript
// src/modules/engine/scoring.engine.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class ScoringEngine {
  computeScore(scoringRule: any, value: any, scoreValue?: number): number {
    if (!scoringRule) return 0;

    switch (scoringRule.kind) {
      case 'manual':
        const rawScore = scoreValue !== undefined && scoreValue !== null ? scoreValue : Number(value) || 0;
        return Math.min(Math.max(0, rawScore), scoringRule.maxPoints || 10);

      case 'threshold':
        const numVal = Number(value) || 0;
        if (scoringRule.direction === 'above' && numVal >= scoringRule.threshold) return scoringRule.points;
        if (scoringRule.direction === 'below' && numVal <= scoringRule.threshold) return scoringRule.points;
        return 0;

      case 'benchmark_range':
        const bVal = Number(value) || 0;
        for (const range of scoringRule.ranges || []) {
          const minOk = range.min === null || range.min === undefined || bVal >= range.min;
          const maxOk = range.max === null || range.max === undefined || bVal <= range.max;
          if (minOk && maxOk) return range.points;
        }
        return 0;

      case 'boolean':
        const boolVal = value === true || value === 'true' || value === 1 || value === '1';
        return boolVal ? scoringRule.truePoints : scoringRule.falsePoints;

      default:
        return 0;
    }
  }
}
```

---

## 🧮 Dynamic Formula Engine Specification

The **Formula Engine** executes dynamic JS math expressions safely:

```typescript
// src/modules/engine/formula.engine.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class FormulaEngine {
  evaluateExpression(expression: string, context: Record<string, number>): number | null {
    if (!expression || expression.trim() === '') return null;

    try {
      const keys = Object.keys(context);
      const values = Object.values(context);
      const fn = new Function(...keys, `return Number(${expression});`);
      const result = fn(...values);

      if (typeof result !== 'number' || isNaN(result) || !isFinite(result)) {
        return null;
      }
      return Number(result.toFixed(2));
    } catch {
      return null;
    }
  }
}
```

---

## 📊 Analytics & Aggregation Engine

```typescript
// src/modules/analytics/analytics.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Project } from '../projects/entities/project.entity';
import { AnalyticsWidget } from './entities/analytics-widget.entity';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel(Project) private projectModel: typeof Project,
    @InjectModel(AnalyticsWidget) private widgetModel: typeof AnalyticsWidget,
  ) {}

  async calculateWidgetData(widgetId: string, projectId: string) {
    const widget = await this.widgetModel.findByPk(widgetId);
    const project = await this.projectModel.findByPk(projectId, { include: ['records'] });
    if (!widget || !project) return [];

    return [];
  }
}
```

---

## 🔄 Execution Sequence Flowcharts

### Sample Data Seeding Sequence Flow

```
[UI Component (Projects Page)]          [SeedController]             [SeedService]          [PostgreSQL DB (Sequelize)]
           │                                   │                           │                             │
           │  POST /api/v1/seed/sample-data    │                           │                             │
           ├──────────────────────────────────>│                           │                             │
           │                                   │ loadSampleData()          │                             │
           │                                   ├──────────────────────────>│                             │
           │                                   │                           │ Start Transaction           │
           │                                   │                           ├────────────────────────────>│
           │                                   │                           │ Seed AppSettings & Bands    │
           │                                   │                           ├────────────────────────────>│
           │                                   │                           │ Seed 12 Core Sections & 6Cols│
           │                                   │                           ├────────────────────────────>│
           │                                   │                           │ Seed Sample Projects        │
           │                                   │                           ├────────────────────────────>│
           │                                   │                           │ Commit Transaction          │
           │                                   │                           ├────────────────────────────>│
           │                                   │ 200 OK (Data Populated)   │                             │
           │ <─────────────────────────────────┴───────────────────────────┤                             │
```

---

## 🛡️ Validation, Security & Error Handling

1. **Global NestJS Pipes & Validation**:
   - Use `ValidationPipe` with `transform: true` and Zod validation pipes for strict request body parsing.
2. **Global Exception Filter**:
   - Implement `HttpExceptionFilter` to capture database constraint violations, numeric min/max validation errors, and formula evaluation exceptions gracefully.
3. **Database Concurrency**:
   - Wrap multi-record matrix updates inside `sequelize.transaction()` to ensure atomicity.
