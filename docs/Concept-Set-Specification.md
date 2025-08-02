---
lang: en-US
title: Concept Set Specification
editLink: true
---

# Concept Set Specification (DRAFT)

A **Concept Set** is a JSON structure used in the **OHDSI** (Observational Health Data Sciences and Informatics) community to define and manage a standardized collection of medical concepts. Concept Sets are typically used to specify collections of standardized vocabulary concepts for use in observational research, cohort definitions, and analytics, enabling consistent identification of clinical phenomena across different healthcare databases.

## JSON Structure

### Root Level Properties

- **id** (integer, required): A unique identifier for the concept set within a given system.
- **name** (string, required): The name of the concept set, providing a human-readable description that should be meaningful to clinical researchers.
- **description** (string, optional): A detailed explanation of the concept set's purpose, inclusion criteria, and clinical rationale.
- **version** (string, optional): Semantic version string (major.minor.patch format) for tracking concept set evolution over time.
- **createdBy** (string, optional): Username or identifier of the concept set creator for provenance tracking.
- **createdDate** (string, optional): ISO 8601 timestamp of concept set creation.
- **modifiedBy** (string, optional): Username or identifier of the last person to modify the concept set.
- **modifiedDate** (string, optional): ISO 8601 timestamp of the last modification.
- **expression** (object, required): The logical definition of which concepts are included in the set.
- **tags** (array, optional): Optional array of string tags for categorization and searchability.
- **metadata** (object, optional): Extensible object for additional implementation-specific data.

### Expression Structure

The **expression** object contains:
- **items** (array, required): A list of concept expression items, where each item includes:
    - **concept** (object, required): The complete concept details from OMOP vocabulary, including:
        - **conceptId** (integer, required): The unique OMOP concept identifier.
        - **conceptName** (string, optional): The human-readable name of the concept.
        - **domainId** (string, optional): The OMOP domain to which the concept belongs (e.g., Condition, Drug, Procedure).
        - **vocabularyId** (string, optional): The source vocabulary system (e.g., SNOMED, ICD10CM, RxNorm).
        - **conceptClassId** (string, optional): The classification of the concept within its vocabulary.
        - **standardConcept** (string or null, optional): Standard concept designation ("S" for Standard, "C" for Classification, null for non-standard).
        - **conceptCode** (string, optional): The original code from the source vocabulary.
        - **validStartDate** (string, optional): Date when the concept became valid (YYYY-MM-DD format).
        - **validEndDate** (string, optional): Date when the concept becomes invalid (YYYY-MM-DD format).
        - **invalidReason** (string or null, optional): Reason for concept invalidation ("D" for deleted, "U" for updated, null for valid concepts).
    - **isExcluded** (boolean, required): Indicates whether the concept should be excluded from the set (false = include, true = exclude).
    - **includeDescendants** (boolean, required): Specifies whether descendant concepts in the vocabulary hierarchy should be included.
    - **includeMapped** (boolean, required): Specifies whether concepts mapped from source vocabularies should be included.

## Usage

Concept Sets are fundamental building blocks in OHDSI research, used in:
- **Cohort definitions**: Defining inclusion and exclusion criteria for study populations
- **Feature extraction**: Identifying relevant clinical events, medications, or procedures
- **Outcome definitions**: Specifying endpoints for observational studies
- **Phenotype algorithms**: Creating reproducible definitions of clinical conditions
- **Multi-database studies**: Ensuring consistent concept identification across different OHDSI network partners

The hierarchical inclusion/exclusion logic allows for sophisticated concept set definitions that can capture clinical nuance while maintaining computational precision.

## JSON Schema

The following JSON Schema defines the complete structure of the Concept Set object:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "OHDSI Concept Set",
  "description": "A standardized collection of medical concepts representing a clinical phenomenon",
  "type": "object",
  "required": ["id", "name", "expression"],
  "properties": {
    "id": {
      "type": "integer",
      "description": "Unique identifier for the concept set",
      "minimum": 1
    },
    "name": {
      "type": "string",
      "description": "Human-readable name for the concept set",
      "minLength": 1,
      "maxLength": 255
    },
    "description": {
      "type": ["string", "null"],
      "description": "Optional detailed description of the concept set purpose and contents",
      "maxLength": 4000
    },
    "version": {
      "type": ["string", "null"],
      "description": "Version identifier for the concept set",
      "pattern": "^[0-9]+\\.[0-9]+\\.[0-9]+$"
    },
    "createdBy": {
      "type": ["string", "null"],
      "description": "Username or identifier of the concept set creator",
      "maxLength": 255
    },
    "createdDate": {
      "type": ["string", "null"],
      "description": "ISO 8601 timestamp of concept set creation",
      "format": "date-time"
    },
    "modifiedBy": {
      "type": ["string", "null"],
      "description": "Username or identifier of the last modifier",
      "maxLength": 255
    },
    "modifiedDate": {
      "type": ["string", "null"],
      "description": "ISO 8601 timestamp of last modification",
      "format": "date-time"
    },
    "expression": {
      "type": "object",
      "description": "The logical expression defining which concepts are included",
      "required": ["items"],
      "properties": {
        "items": {
          "type": "array",
          "description": "Array of concept expression items",
          "minItems": 1,
          "items": {
            "$ref": "#/definitions/conceptExpressionItem"
          }
        }
      }
    },
    "tags": {
      "type": ["array", "null"],
      "description": "Optional array of tags for categorization",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 100
      }
    },
    "metadata": {
      "type": ["object", "null"],
      "description": "Optional additional metadata",
      "additionalProperties": true
    }
  },
  "definitions": {
    "conceptExpressionItem": {
      "type": "object",
      "description": "An individual concept with inclusion/exclusion rules",
      "required": ["concept", "isExcluded", "includeDescendants", "includeMapped"],
      "properties": {
        "concept": {
          "$ref": "#/definitions/concept"
        },
        "isExcluded": {
          "type": "boolean",
          "description": "Whether this concept should be excluded from the set"
        },
        "includeDescendants": {
          "type": "boolean",
          "description": "Whether to include descendant concepts in the hierarchy"
        },
        "includeMapped": {
          "type": "boolean",
          "description": "Whether to include concepts mapped to this concept"
        }
      }
    },
    "concept": {
      "type": "object",
      "description": "A standardized medical concept from OMOP vocabulary",
      "required": ["conceptId", "conceptName", "domainId", "vocabularyId", "conceptClassId", "standardConcept", "conceptCode", "validStartDate", "validEndDate", "invalidReason"],
      "properties": {
        "conceptId": {
          "type": "integer",
          "description": "Unique OMOP concept identifier",
          "minimum": 0
        },
        "conceptName": {
          "type": "string",
          "description": "Human-readable concept name",
          "minLength": 1,
          "maxLength": 255
        },
        "domainId": {
          "type": "string",
          "description": "OMOP domain (e.g., Condition, Drug, Procedure)",
          "minLength": 1,
          "maxLength": 20
        },
        "vocabularyId": {
          "type": "string",
          "description": "Source vocabulary (e.g., SNOMED, ICD10CM, RxNorm)",
          "minLength": 1,
          "maxLength": 20
        },
        "conceptClassId": {
          "type": "string",
          "description": "Classification within the vocabulary",
          "minLength": 1,
          "maxLength": 20
        },
        "standardConcept": {
          "type": ["string", "null"],
          "description": "Standard concept designation",
          "enum": ["S", "C", null]
        },
        "conceptCode": {
          "type": "string",
          "description": "Original code from source vocabulary",
          "minLength": 1,
          "maxLength": 50
        },
        "validStartDate": {
          "type": "string",
          "description": "Date when concept became valid (YYYY-MM-DD)",
          "format": "date"
        },
        "validEndDate": {
          "type": "string",
          "description": "Date when concept becomes invalid (YYYY-MM-DD)",
          "format": "date"
        },
        "invalidReason": {
          "type": ["string", "null"],
          "description": "Reason for concept invalidation",
          "enum": ["D", "U", null]
        }
      }
    }
  },
  "additionalProperties": false
}
```

## Example Concept Set

### Simple Concept Set
```json
{
  "id": 123,
  "name": "Type 2 Diabetes Mellitus",
  "description": "Concept set for identifying Type 2 diabetes mellitus cases in observational studies",
  "version": "1.0.0",
  "createdBy": "researcher@example.org",
  "createdDate": "2024-01-15T10:30:00Z",
  "expression": {
    "items": [
      {
        "concept": {
          "conceptId": 201826,
          "conceptName": "Type 2 diabetes mellitus",
          "domainId": "Condition",
          "vocabularyId": "SNOMED",
          "conceptClassId": "Clinical Finding",
          "standardConcept": "S",
          "conceptCode": "44054006",
          "validStartDate": "1970-01-01",
          "validEndDate": "2099-12-31",
          "invalidReason": null
        },
        "isExcluded": false,
        "includeDescendants": true,
        "includeMapped": true
      }
    ]
  },
  "tags": ["diabetes", "endocrine", "chronic-disease"]
}
```

### Complex Concept Set with Exclusions
```json
{
  "id": 456,
  "name": "Heart Failure excluding Rheumatic",
  "description": "Heart failure concept set excluding rheumatic heart failure cases",
  "version": "1.2.0",
  "expression": {
    "items": [
      {
        "concept": {
          "conceptId": 316139,
          "conceptName": "Heart failure",
          "domainId": "Condition",
          "vocabularyId": "SNOMED",
          "conceptClassId": "Clinical Finding",
          "standardConcept": "S",
          "conceptCode": "84114007",
          "validStartDate": "2002-01-30",
          "validEndDate": "2099-12-30",
          "invalidReason": null
        },
        "isExcluded": false,
        "includeDescendants": true,
        "includeMapped": false
      },
      {
        "concept": {
          "conceptId": 315295,
          "conceptName": "Congestive rheumatic heart failure",
          "domainId": "Condition",
          "vocabularyId": "SNOMED",
          "conceptClassId": "Clinical Finding",
          "standardConcept": "S",
          "conceptCode": "82523003",
          "validStartDate": "2002-01-30",
          "validEndDate": "2099-12-30",
          "invalidReason": null
        },
        "isExcluded": true,
        "includeDescendants": true,
        "includeMapped": false
      }
    ]
  },
  "tags": ["cardiology", "heart-failure"]
}
```

## Implementation Notes

1. **Validation**: Implementations should validate concept IDs against the current OMOP vocabulary to ensure data quality.

2. **Hierarchical Logic**: When `includeDescendants` is true, all child concepts in the vocabulary hierarchy are automatically included, enabling comprehensive phenotype capture.

3. **Exclusion Processing**: Excluded concepts are processed after inclusions, effectively removing concepts that would otherwise be included through hierarchical or mapping rules.

4. **Temporal Considerations**: The `validStartDate` and `validEndDate` fields allow implementations to consider concept validity periods for historical data analysis.

5. **Versioning**: Concept sets should use semantic versioning to track evolution over time, particularly important for longitudinal studies and reproducible research.

6. **Extensibility**: The `metadata` field allows for implementation-specific extensions while maintaining core compatibility across OHDSI tools.

7. **Provenance**: The creator and modifier fields enable tracking of concept set authorship and changes, crucial for research transparency and collaboration.